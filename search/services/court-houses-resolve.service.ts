import { LocalStorageService } from 'app/shared/services/local-storage.service';
import {Store} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {HttpService} from '../../shared/services/http.service';
import {LoginService} from '../../login/services/login.service';

import {ApplicationState} from '../../store/index';
import {getCourtHousesEntitiesSelector} from '../../store/selectors';
import {CourtHousesState} from '../../store/reducers/court-houses/court-house.reducer';
import {CourtHousesSuccessAction} from '../../store/actions/court-houses/court-houses.actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/concatMap';
import {Maybe} from '../../shared/maybe';

@Injectable()
export class CourtHousesResolveService  {
  constructor(private store: Store<ApplicationState>,
              private loginService: LoginService,
              private httpService: HttpService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourtHousesState> {
    return this.getCourtHouseDataFromStore()
      .take(1)
      .switchMap((courtHouses: CourtHousesState) => {
        if (courtHouses) {
          return of(courtHouses);
        }
        return this.getCourtHousesFromAPI()
      })
  }

  getCourtHouseDataFromStore(): any {
    return this.store.select(getCourtHousesEntitiesSelector)
      .map(courtHouses => courtHouses.length ? courtHouses : false)
      .catch((error: Response) => of(error));
  }
  getCourtHousesFromAPI() {
    return this.loginService.links()
      .take(1)
      .takeWhile((links) => Maybe.of(links).pluck(['courthouses', 'methods']).defaultIfEmpty([]).join()[0] === 'GET')
      .concatMap(links => this.httpService.get(Maybe.of(links).pluck(['courthouses', 'href']).join()))
      .subscribe(res => LocalStorageService.setItem('courthouses', res['Courthouses']));
  }
}
