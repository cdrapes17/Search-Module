import { LocalStorageService } from 'app/shared/services/local-storage.service';
import {Store} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


import {ApplicationState} from '../../store/index';
import {HttpService} from '../../shared/services/http.service';
import {LoginService} from '../../login/services/login.service';
import {getCourtRoomsEntitiesSelector} from '../../store/selectors';


import {Maybe} from '../../shared/maybe';
import {CourtRoomsState} from '../../store/reducers/court-rooms/court-room.reducer';
import {CourtRoomsSuccessAction} from '../../store/actions/court-rooms/court-rooms.actions';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinct';

@Injectable()
export class CourtRoomsResolveService {
  constructor(private store: Store<ApplicationState>,
              private loginService: LoginService,
              private httpService: HttpService) {
  }


  resolve(): Observable<CourtRoomsState> {

    return this.getCourtRoomDataFromStore()
      .take(1)
      .switchMap((courtRooms: CourtRoomsState) => {
        if (courtRooms) {
          return of(courtRooms);
        }
        return this.getCourtRoomsFromAPI()
      })
  }

  getCourtRoomDataFromStore(): any {
    return this.store.select(getCourtRoomsEntitiesSelector)
      .map(courtRooms => courtRooms.length ? courtRooms : false)
      .catch((error: Response) => of(error));
  }

  getCourtRoomsFromAPI() {
    return this.loginService.links()
      .take(1)
      .takeWhile((links) => Maybe.of(links).pluck(['courtrooms', 'methods']).defaultIfEmpty([]).join()[0] === 'GET')
      .concatMap(links => this.httpService.get(Maybe.of(links).pluck(['courtrooms', 'href']).join()))
      .subscribe(res => LocalStorageService.setItem('courtrooms', res['Courtrooms']));
  }
}
