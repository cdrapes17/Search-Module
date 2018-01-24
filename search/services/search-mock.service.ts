import {Injectable} from '@angular/core';
import {SearchService} from './search.service';
import {Observable} from 'rxjs/Observable';
import {CourtHouse} from '../../shared/models/courthouse.model';
import {of} from 'rxjs/observable/of';

@Injectable()
export class SearchMockService implements SearchService {

  constructor() {
  }

  getCaseFileQuery(): Observable<string> {
    return undefined;
  }

  getCourtSessionQuery(): Observable<string> {
    return undefined;
  }

  getCourtSessionLoading(): Observable<boolean> {
    return undefined;
  }

  getCourtSessionError(): Observable<{}> {
    return undefined;
  }

  getCourtSessionEntities(): Observable<{}> {
    return undefined;
  }

  doSearchCaseFiles(query: string): any {
    return undefined;
  }

  doSearchCourtSessions(query: string): any {
    return undefined;
  }

  getCaseFileEntities(): Observable<any> {
    return undefined;
  }

  getCaseFileLoading(): Observable<boolean> {
    return undefined;
  }

  getCaseFileError(): Observable<{}> {
    return undefined;
  }

  getArchivedCaseFileQuery(): Observable<string> {
    return undefined;
  }

  doArchivedSearchCaseFiles(query: string): any {
    return undefined;
  }

  getArchivedCaseFileEntities(): Observable<any> {
    return undefined;
  }

  getArchivedCaseFileLoading(): Observable<any> {
    return undefined;
  }

  getArchivedCaseFileError(): Observable<any> {
    return undefined;
  }

  getJudgesHearingFileQuery(): Observable<string> {
    return undefined;
  }

  doSearchJudgesHearingFile(query: string): any {
    return undefined;
  }

  getJudgesHearingFileEntities(): Observable<any> {
    return undefined;
  }

  getJudgesHearingFileLoading(): Observable<boolean> {
    return undefined;
  }

  getJudgesHearingFileError(): Observable<{}> {
    return undefined;
  }

  getCourtHousesEntities(): Observable<CourtHouse[]> {
    return of([
      {
        'name': 'Abergavenny Magistrates\' Court',
        'ouCode': 'B61AB00',
        'visible': 'true'
      },
      {
        'name': 'Aberystwyth Magistrates\' Court',
        'ouCode': 'B63AD00',
        'visible': 'true'
      },
      {
        'name': 'Aberystwyth Youth Court',
        'ouCode': 'B63AE00',
        'visible': 'true'
      },
      {
        'name': 'Accrington Magistrates\' Court',
        'ouCode': 'B04AE00',
        'visible': 'true'
      },
      {
        'name': 'Accrington Youth Court',
        'ouCode': 'B04AZ00',
        'visible': 'true'
      },
      {
        'name': 'AIT Asylum and Immigration Tribunal Hearing Centre',
        'ouCode': 'B21XA00',
        'visible': 'true'
      },
      {
        'name': 'Aldershot Magistrates\' Court',
        'ouCode': 'B44AG00',
        'visible': 'true'
      },
      {
        'name': 'Aldridge Magistrates\' Court',
        'ouCode': 'B20NP00',
        'visible': 'true'
      },
      {
        'name': 'Alton Magistrates\' Court',
        'ouCode': 'B44AI00',
        'visible': 'true'
      },
      {
        'name': 'Amersham Magistrates\' Court',
        'ouCode': 'B43AJ00',
        'visible': 'true'
      },
      {
        'name': 'Aylesbury Magistrates\' Court',
        'ouCode': 'B43AP00',
        'visible': 'true'
      },
      {
        'name': 'Banbury Magistrates\' Court',
        'ouCode': 'B43AQ00',
        'visible': 'true'
      },
      {
        'name': 'Barkingside Magistrates\' Court',
        'ouCode': 'B01KR00',
        'visible': 'true'
      },
      {
        'name': 'Barkingside Youth Court',
        'ouCode': 'B01KS00',
        'visible': 'true'
      },
      {
        'name': 'Barnsley Magistrates\' Court',
        'ouCode': 'B14AV00',
        'visible': 'true'
      },
      {
        'name': 'Barnstaple Magistrates\' Court',
        'ouCode': 'B50AW00',
        'visible': 'true'
      },
      {
        'name': 'Barrow-in-Furness Magistrates\' Court',
        'ouCode': 'B03AX00',
        'visible': 'true'
      },
      {
        'name': 'Barry Youth Court',
        'ouCode': 'B62AY00',
        'visible': 'true'
      },
      {
        'name': 'Basildon Magistrates\' Court',
        'ouCode': 'B42AZ00',
        'visible': 'true'
      },
      {
        'name': 'Basildon Youth Court',
        'ouCode': 'B42AY00',
        'visible': 'true'
      },
      {
        'name': 'Basingstoke Magistrates\' Court',
        'ouCode': 'B44BA00',
        'visible': 'true'
      },
      {
        'name': 'Basingstoke Youth Court',
        'ouCode': 'B44BZ00',
        'visible': 'true'
      },
      {
        'name': 'Bath Magistrates\' Court',
        'ouCode': 'B52BB00',
        'visible': 'true'
      },
      {
        'name': 'Bedford Magistrates\' Court',
        'ouCode': 'B40BC00',
        'visible': 'true'
      },
      {
        'name': 'Belmarsh Magistrates\' Court',
        'ouCode': 'B01BE00',
        'visible': 'true'
      },
      {
        'name': 'Berwick-upon-Tweed Magistrates\' Court',
        'ouCode': 'B10BF00',
        'visible': 'true'
      },
      {
        'name': 'Beverley Magistrates\' Court',
        'ouCode': 'B16BG00',
        'visible': 'true'
      },
      {
        'name': 'Bexley Magistrates\' Court',
        'ouCode': 'B01BH00',
        'visible': 'true'
      },
      {
        'name': 'Bicester Magistrates\' Court',
        'ouCode': 'B43BI00',
        'visible': 'true'
      },
      {
        'name': 'Birmingham Civil Justice Centre',
        'ouCode': 'B20TJ00',
        'visible': 'true'
      },
      {
        'name': 'Birmingham Magistrates\' Court',
        'ouCode': 'B20BL00',
        'visible': 'true'
      },
      {
        'name': 'Birmingham Youth Court',
        'ouCode': 'B20BN00',
        'visible': 'true'
      },
      {
        'name': 'Blackburn Magistrates\' Court',
        'ouCode': 'B04BP00',
        'visible': 'true'
      },
      {
        'name': 'Blackburn Youth Court',
        'ouCode': 'B04BN00',
        'visible': 'true'
      },
      {
        'name': 'Blackpool Magistrates\' Court',
        'ouCode': 'B04BQ00',
        'visible': 'true'
      },
      {
        'name': 'Blackpool Youth Court',
        'ouCode': 'B04BZ00',
        'visible': 'true'
      },
      {
        'name': 'Bodmin Magistrates\' Court',
        'ouCode': 'B50BU00',
        'visible': 'true'
      },
      {
        'name': 'Bolton Magistrates\' Court',
        'ouCode': 'B06BV00',
        'visible': 'true'
      },
      {
        'name': 'Boston Magistrates\' Court',
        'ouCode': 'B32BX00',
        'visible': 'true'
      },
      {
        'name': 'Boston Youth Court',
        'ouCode': 'B32BW00',
        'visible': 'true'
      },
      {
        'name': 'Bournemouth Combined Court',
        'ouCode': 'B55IS00',
        'visible': 'true'
      },
      {
        'name': 'Bournemouth Magistrates\' Court',
        'ouCode': 'B55BZ00',
        'visible': 'true'
      },
      {
        'name': 'Bracknell Courthouse',
        'ouCode': 'B43CB00',
        'visible': 'true'
      },
      {
        'name': 'Bradford and Keighley Magistrates\' Court',
        'ouCode': 'B13CC00',
        'visible': 'true'
      },
      {
        'name': 'Bradford Youth Court',
        'ouCode': 'B13CZ00',
        'visible': 'false'
      },
      {
        'name': 'Brecon Magistrates\' Court',
        'ouCode': 'B63CD00',
        'visible': 'true'
      },
      {
        'name': 'Bridgend Magistrates\' Court',
        'ouCode': 'B62CG00',
        'visible': 'true'
      },
      {
        'name': 'Bridlington Magistrates\' Court',
        'ouCode': 'B16CJ00',
        'visible': 'true'
      },
      {
        'name': 'Brighton Magistrates\' Court',
        'ouCode': 'B47CL00',
        'visible': 'true'
      },
      {
        'name': 'Brighton Youth Court',
        'ouCode': 'B47PE00',
        'visible': 'true'
      },
      {
        'name': 'Bristol Magistrates\' Court',
        'ouCode': 'B52CM00',
        'visible': 'true'
      },
      {
        'name': 'Bromley Magistrates\' Court',
        'ouCode': 'B01CN00',
        'visible': 'true'
      },
      {
        'name': 'Burnley Magistrates\' Court',
        'ouCode': 'B04CO00',
        'visible': 'true'
      },
      {
        'name': 'Burnley Youth Court',
        'ouCode': 'B04CZ00',
        'visible': 'true'
      },
      {
        'name': 'Burton-upon-Trent Magistrates\' Court',
        'ouCode': 'B21CP00',
        'visible': 'true'
      },
      {
        'name': 'Bury Magistrates\' Court',
        'ouCode': 'B06CQ00',
        'visible': 'true'
      },
      {
        'name': 'Bury St. Edmunds County Court (Magistrates)',
        'ouCode': 'B37UK00',
        'visible': 'false'
      },
      {
        'name': 'Bury St. Edmunds Magistrates\' Court',
        'ouCode': 'B37CR00',
        'visible': 'true'
      },
      {
        'name': 'Caernarfon Magistrates\' Court',
        'ouCode': 'B60WU00',
        'visible': 'true'
      },
      {
        'name': 'Caernarfon Youth Court',
        'ouCode': 'B60CZ00',
        'visible': 'true'
      },
      {
        'name': 'Caerphilly Magistrates\' Court',
        'ouCode': 'B61CU00',
        'visible': 'true'
      },
      {
        'name': 'Calderdale Magistrates\' Court',
        'ouCode': 'B13GF00',
        'visible': 'true'
      },
      {
        'name': 'Calderdale Youth Court',
        'ouCode': 'B13GZ00',
        'visible': 'true'
      },
      {
        'name': 'Camberwell Green Magistrates\' Court',
        'ouCode': 'B01CX00',
        'visible': 'true'
      },
      {
        'name': 'Camberwell Green Magistrates\' Court (sitting at Blackfriars CC)',
        'ouCode': 'C01BL00',
        'visible': 'true'
      },
      {
        'name': 'Cambridge Magistrates\' Court',
        'ouCode': 'B35CZ00',
        'visible': 'true'
      },
      {
        'name': 'Cannock Magistrates\' Court',
        'ouCode': 'B21DA00',
        'visible': 'true'
      },
      {
        'name': 'Cannock Youth Court',
        'ouCode': 'B21DZ00',
        'visible': 'true'
      },
      {
        'name': 'Canterbury Magistrates\' Court',
        'ouCode': 'B46DB00',
        'visible': 'true'
      },
      {
        'name': 'Canterbury Youth Court',
        'ouCode': 'B46DC00',
        'visible': 'true'
      },
      {
        'name': 'Cardiff Magistrates\' Court',
        'ouCode': 'B62DC00',
        'visible': 'true'
      },
      {
        'name': 'Cardiff Youth Court',
        'ouCode': 'B62DZ00',
        'visible': 'true'
      },
      {
        'name': 'Carlisle Magistrates\' Court',
        'ouCode': 'B03DE00',
        'visible': 'true'
      },
      {
        'name': 'Carlisle Youth Court',
        'ouCode': 'B03DZ00',
        'visible': 'true'
      },
      {
        'name': 'Carmarthen Magistrates\' Court',
        'ouCode': 'B63DF00',
        'visible': 'true'
      },
      {
        'name': 'Chelmsford Magistrates\' Court',
        'ouCode': 'B42CM00',
        'visible': 'true'
      },
      {
        'name': 'Cheltenham Magistrates\' Court',
        'ouCode': 'B53DJ00',
        'visible': 'true'
      },
      {
        'name': 'Chester Magistrates\' Court',
        'ouCode': 'B07DM00',
        'visible': 'true'
      },
      {
        'name': 'Chesterfield Magistrates\' Court',
        'ouCode': 'B30PG00',
        'visible': 'true'
      },
      {
        'name': 'Chesterfield Youth Court',
        'ouCode': 'B30PH00',
        'visible': 'true'
      },
      {
        'name': 'Chichester Magistrates\' Court',
        'ouCode': 'B47DQ00',
        'visible': 'true'
      },
      {
        'name': 'Chippenham Magistrates\' Court',
        'ouCode': 'B54DR00',
        'visible': 'true'
      },
      {
        'name': 'Chippenham Youth Court',
        'ouCode': 'B54DZ00',
        'visible': 'true'
      },
      {
        'name': 'Chorley Magistrates\' Court',
        'ouCode': 'B04DS00',
        'visible': 'true'
      },
      {
        'name': 'Chorley Youth Court',
        'ouCode': 'B04DZ00',
        'visible': 'true'
      },
      {
        'name': 'City of London Magistrates\' Court',
        'ouCode': 'B01DU00',
        'visible': 'true'
      },
      {
        'name': 'Colchester Magistrates\' Court',
        'ouCode': 'B42CO00',
        'visible': 'true'
      },
      {
        'name': 'Complex Casework Court (Sefton MC)',
        'ouCode': 'B05PQ00',
        'visible': 'true'
      },
      {
        'name': 'Consett Magistrates\' Court',
        'ouCode': 'B11DZ00',
        'visible': 'true'
      },
      {
        'name': 'Corby Magistrates\' Court',
        'ouCode': 'B34EA00',
        'visible': 'true'
      },
      {
        'name': 'Coventry Magistrates\' Court',
        'ouCode': 'B20EB00',
        'visible': 'true'
      },
      {
        'name': 'Crawley Magistrates\' Court',
        'ouCode': 'B47EC00',
        'visible': 'true'
      },
      {
        'name': 'Crewe Magistrates\' Court',
        'ouCode': 'B07ED00',
        'visible': 'true'
      },
      {
        'name': 'Croydon Magistrates\' Court',
        'ouCode': 'B01EF00',
        'visible': 'true'
      },
      {
        'name': 'Cwmbran Magistrates\' Court',
        'ouCode': 'B61EH00',
        'visible': 'true'
      },
      {
        'name': 'Cwmbran Youth Court',
        'ouCode': 'B61EZ00',
        'visible': 'true'
      },
      {
        'name': 'Darlington Magistrates\' Court',
        'ouCode': 'B11EI00',
        'visible': 'true'
      },
      {
        'name': 'Dartford Magistrates\' Court',
        'ouCode': 'B46EJ00',
        'visible': 'true'
      },
      {
        'name': 'Dolgellau Magistrates\' Court',
        'ouCode': 'B60ES00',
        'visible': 'true'
      },
      {
        'name': 'Doncaster Magistrates\' Court',
        'ouCode': 'B14ET00',
        'visible': 'true'
      },
      {
        'name': 'Dover Magistrates\' Court',
        'ouCode': 'B46EW00',
        'visible': 'true'
      },
      {
        'name': 'Dudley Magistrates\' Court',
        'ouCode': 'B20EY00',
        'visible': 'true'
      },
      {
        'name': 'Ealing Magistrates\' Court',
        'ouCode': 'B01FA00',
        'visible': 'true'
      },
      {
        'name': 'Eastbourne Magistrates\' Court',
        'ouCode': 'B47FB00',
        'visible': 'true'
      },
      {
        'name': 'Exeter Magistrates\' Court',
        'ouCode': 'B50FI00',
        'visible': 'true'
      },
      {
        'name': 'Exeter Youth Court',
        'ouCode': 'B50FZ00',
        'visible': 'true'
      },
      {
        'name': 'Fareham Magistrates\' Court',
        'ouCode': 'B44FJ00',
        'visible': 'true'
      },
      {
        'name': 'Feltham Magistrates\' Court',
        'ouCode': 'B01FK00',
        'visible': 'true'
      },
      {
        'name': 'Fleetwood Magistrates\' Court',
        'ouCode': 'B04FM00',
        'visible': 'true'
      },
      {
        'name': 'Folkestone Magistrates\' Court',
        'ouCode': 'B46FO00',
        'visible': 'true'
      },
      {
        'name': 'Folkestone Youth Court',
        'ouCode': 'B46FZ00',
        'visible': 'true'
      },
      {
        'name': 'Gainsborough Magistrates\' Court',
        'ouCode': 'B32FQ00',
        'visible': 'true'
      },
      {
        'name': 'Gateshead Magistrates\' Court',
        'ouCode': 'B10FR00',
        'visible': 'true'
      },
      {
        'name': 'Gloucester County Court (Magistrates)',
        'ouCode': 'B53VZ00',
        'visible': 'false'
      },
      {
        'name': 'Gloucester Magistrates\' Court',
        'ouCode': 'B53FT00',
        'visible': 'true'
      },
      {
        'name': 'Grantham Magistrates\' Court',
        'ouCode': 'B32FX00',
        'visible': 'true'
      },
      {
        'name': 'Great Yarmouth Magistrates\' Court',
        'ouCode': 'B36FZ00',
        'visible': 'true'
      },
      {
        'name': 'Greenwich Magistrates\' Court',
        'ouCode': 'B01GA00',
        'visible': 'true'
      },
      {
        'name': 'Grimsby Magistrates\' Court',
        'ouCode': 'B16GB00',
        'visible': 'true'
      },
      {
        'name': 'Guildford Magistrates\' Court',
        'ouCode': 'B45GC00',
        'visible': 'true'
      },
      {
        'name': 'Hammersmith Magistrates\' Court',
        'ouCode': 'B01OB00',
        'visible': 'false'
      },
      {
        'name': 'Harlow Magistrates\' Court',
        'ouCode': 'B42GG00',
        'visible': 'true'
      },
      {
        'name': 'Harrogate Magistrates\' Court',
        'ouCode': 'B12GH00',
        'visible': 'true'
      },
      {
        'name': 'Harrogate Youth Court',
        'ouCode': 'B12GZ00',
        'visible': 'true'
      },
      {
        'name': 'Hartlepool Magistrates\' Court',
        'ouCode': 'B17GJ00',
        'visible': 'true'
      },
      {
        'name': 'Hastings Magistrates\' Court',
        'ouCode': 'B47GL00',
        'visible': 'true'
      },
      {
        'name': 'Hatfield Magistrates\' Court',
        'ouCode': 'B41US00',
        'visible': 'true'
      },
      {
        'name': 'Haverfordwest Magistrates\' Court',
        'ouCode': 'B63GN00',
        'visible': 'true'
      },
      {
        'name': 'Haverfordwest Youth Court',
        'ouCode': 'B63GZ00',
        'visible': 'true'
      },
      {
        'name': 'Hendon Magistrates Court',
        'ouCode': 'B01GQ00',
        'visible': 'true'
      },
      {
        'name': 'Herefordshire Magistrates\' Court',
        'ouCode': 'B22GR00',
        'visible': 'true'
      },
      {
        'name': 'Hertford Magistrates Court',
        'ouCode': 'B41GS00',
        'visible': 'true'
      },
      {
        'name': 'High Peak Magistrates\' Court (Buxton)',
        'ouCode': 'B30CS00',
        'visible': 'true'
      },
      {
        'name': 'Durham Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'High Peak Magistrates\' Court (Glossop)',
        'ouCode': 'B30FS00',
        'visible': 'true'
      },
      {
        'name': 'Highbury Corner Magistrates\' Court',
        'ouCode': 'B01GU00',
        'visible': 'true'
      },
      {
        'name': 'Hinckley Magistrates\' Court',
        'ouCode': 'B33GW00',
        'visible': 'true'
      },
      {
        'name': 'Holyhead Magistrates\' Court',
        'ouCode': 'B60GX00',
        'visible': 'true'
      },
      {
        'name': 'Holyhead Youth Court',
        'ouCode': 'B60GZ00',
        'visible': 'true'
      },
      {
        'name': 'Horsham Magistrates\' Court',
        'ouCode': 'B47HB00',
        'visible': 'true'
      },
      {
        'name': 'Huddersfield Magistrates\' Court',
        'ouCode': 'B13HD00',
        'visible': 'true'
      },
      {
        'name': 'Huddersfield Youth Court',
        'ouCode': 'B13HE00',
        'visible': 'true'
      },
      {
        'name': 'Hull Magistrates\' Court',
        'ouCode': 'B16HE00',
        'visible': 'true'
      },
      {
        'name': 'Huntingdon Magistrates\' Court',
        'ouCode': 'B35HF00',
        'visible': 'true'
      },
      {
        'name': 'Huntingdon Youth Court',
        'ouCode': 'B35HZ00',
        'visible': 'true'
      },
      {
        'name': 'Inner London Family Proceedings Court',
        'ouCode': 'B01HG00',
        'visible': 'true'
      },
      {
        'name': 'Ipswich Magistrates\' Court',
        'ouCode': 'B37HI00',
        'visible': 'true'
      },
      {
        'name': 'Isle of Wight Magistrates\' Court',
        'ouCode': 'B44JK00',
        'visible': 'true'
      },
      {
        'name': 'Isles of Scilly Magistrates\' Court',
        'ouCode': 'B50HJ00',
        'visible': 'true'
      },
      {
        'name': 'Kendal Magistrates\' Court',
        'ouCode': 'B03HK00',
        'visible': 'true'
      },
      {
        'name': 'Kendal Youth Court',
        'ouCode': 'B03HZ00',
        'visible': 'true'
      },
      {
        'name': 'Kettering Magistrates\' Court',
        'ouCode': 'B34HL00',
        'visible': 'true'
      },
      {
        'name': 'Kidderminster Magistrates\' Court',
        'ouCode': 'B22HM00',
        'visible': 'true'
      },
      {
        'name': 'Lancaster Magistrates\' Court',
        'ouCode': 'B04HQ00',
        'visible': 'true'
      },
      {
        'name': 'Lancaster Youth Court',
        'ouCode': 'B04HR00',
        'visible': 'true'
      },
      {
        'name': 'Lavender Hill Magistrates\' Court',
        'ouCode': 'B01LY00',
        'visible': 'true'
      },
      {
        'name': 'Leamington Spa Magistrates\' Court',
        'ouCode': 'B23HS00',
        'visible': 'true'
      },
      {
        'name': 'Leamington Spa Youth Court',
        'ouCode': 'B23HZ00',
        'visible': 'true'
      },
      {
        'name': 'Leeds Magistrates\' Court',
        'ouCode': 'B13HT00',
        'visible': 'true'
      },
      {
        'name': 'Leeds Youth Court',
        'ouCode': 'B13HZ00',
        'visible': 'true'
      },
      {
        'name': 'Leicester Magistrates\' Court',
        'ouCode': 'B33HU00',
        'visible': 'true'
      },
      {
        'name': 'Leicester Youth Court',
        'ouCode': 'B33HZ00',
        'visible': 'true'
      },
      {
        'name': 'Leyland Magistrates\' Court',
        'ouCode': 'B04HW00',
        'visible': 'true'
      },
      {
        'name': 'Lincoln Magistrates\' Court',
        'ouCode': 'B32HX00',
        'visible': 'true'
      },
      {
        'name': 'Lincoln Youth Court',
        'ouCode': 'B32HZ00',
        'visible': 'true'
      },
      {
        'name': 'Liverpool Civil and Family Court',
        'ouCode': 'B05SC00',
        'visible': 'true'
      },
      {
        'name': 'Liverpool Magistrates\' Court (Dale Street)',
        'ouCode': 'B05IA00',
        'visible': 'true'
      },
      {
        'name': 'Liverpool Magistrates Court',
        'ouCode': 'B05PK00',
        'visible': 'true'
      },
      {
        'name': 'Llandrindod Wells Magistrates\' Court',
        'ouCode': 'B63IC00',
        'visible': 'true'
      },
      {
        'name': 'Llandudno Magistrates\' Court',
        'ouCode': 'B60ID00',
        'visible': 'true'
      },
      {
        'name': 'Llandudno Youth Court',
        'ouCode': 'B60IX00',
        'visible': 'true'
      },
      {
        'name': 'Llanelli Magistrates\' Court',
        'ouCode': 'B63IE00',
        'visible': 'true'
      },
      {
        'name': 'Llanelli Youth Court',
        'ouCode': 'B63IF00',
        'visible': 'true'
      },
      {
        'name': 'Llangefni Shire Hall',
        'ouCode': 'B60IF00',
        'visible': 'false'
      },
      {
        'name': 'Loughborough Magistrates\' Court',
        'ouCode': 'B33II00',
        'visible': 'true'
      },
      {
        'name': 'Lowestoft Magistrates\' Court',
        'ouCode': 'B37IK00',
        'visible': 'true'
      },
      {
        'name': 'Luton Magistrates\' Court',
        'ouCode': 'B40IM00',
        'visible': 'true'
      },
      {
        'name': 'Macclesfield Magistrates\' Court',
        'ouCode': 'B07IO00',
        'visible': 'true'
      },
      {
        'name': 'Maidenhead Courthouse',
        'ouCode': 'B43IQ00',
        'visible': 'true'
      },
      {
        'name': 'Maidstone Magistrates\' Court',
        'ouCode': 'B46IR00',
        'visible': 'true'
      },
      {
        'name': 'Maidstone Youth Court',
        'ouCode': 'B46IS00',
        'visible': 'true'
      },
      {
        'name': 'Manchester City Magistrates\' Court',
        'ouCode': 'B06IS00',
        'visible': 'true'
      },
      {
        'name': 'Manchester Civil Justice Centre',
        'ouCode': 'B06WX00',
        'visible': 'true'
      },
      {
        'name': 'Mansfield Magistrates\' Court',
        'ouCode': 'B31IT00',
        'visible': 'true'
      },
      {
        'name': 'Mansfield Youth Court',
        'ouCode': 'B31IZ00',
        'visible': 'true'
      },
      {
        'name': 'Margate Magistrates\' Court',
        'ouCode': 'B46IU00',
        'visible': 'true'
      },
      {
        'name': 'Medway Magistrates\' Court',
        'ouCode': 'B46DH00',
        'visible': 'true'
      },
      {
        'name': 'Merthyr Tydfil Magistrates\' Court',
        'ouCode': 'B62IZ00',
        'visible': 'true'
      },
      {
        'name': 'Merthyr Tydfil Youth Court',
        'ouCode': 'B62IY00',
        'visible': 'true'
      },
      {
        'name': 'Milton Keynes Magistrates\' Court',
        'ouCode': 'B43JC00',
        'visible': 'true'
      },
      {
        'name': 'Mold Magistrates\' Court',
        'ouCode': 'B60JE00',
        'visible': 'true'
      },
      {
        'name': 'Mold Youth Court',
        'ouCode': 'B60JZ00',
        'visible': 'true'
      },
      {
        'name': 'Newcastle-upon-Tyne Magistrates\' Court',
        'ouCode': 'B10JJ00',
        'visible': 'true'
      },
      {
        'name': 'Newport Magistrates\' Court',
        'ouCode': 'B61NP00',
        'visible': 'true'
      },
      {
        'name': 'Newport Magistrates\' Court (Crown Court Bldg)',
        'ouCode': 'B61WY00',
        'visible': 'true'
      },
      {
        'name': 'Newton Abbot Magistrates\' Court',
        'ouCode': 'B50JO00',
        'visible': 'true'
      },
      {
        'name': 'Newton Abbot Youth Court',
        'ouCode': 'B50JP00',
        'visible': 'true'
      },
      {
        'name': 'Newton Aycliffe Magistrates\' Court',
        'ouCode': 'B11JP00',
        'visible': 'true'
      },
      {
        'name': 'North Cheshire Magistrates Court',
        'ouCode': 'B07FQ00',
        'visible': 'false'
      },
      {
        'name': 'North Shields Magistrates\' Court',
        'ouCode': 'B10JQ00',
        'visible': 'true'
      },
      {
        'name': 'North Somerset Magistrates\' Court',
        'ouCode': 'B52OC00',
        'visible': 'true'
      },
      {
        'name': 'North Staffordshire Justice Centre',
        'ouCode': 'B21JI00',
        'visible': 'true'
      },
      {
        'name': 'Northallerton Magistrates\' Court',
        'ouCode': 'B12JR00',
        'visible': 'true'
      },
      {
        'name': 'Northampton Magistrates\' Court',
        'ouCode': 'B34JS00',
        'visible': 'true'
      },
      {
        'name': 'Northampton Youth Court',
        'ouCode': 'B34JZ00',
        'visible': 'true'
      },
      {
        'name': 'Norwich Magistrates\' Court',
        'ouCode': 'B36JU00',
        'visible': 'true'
      },
      {
        'name': 'Nottingham Magistrates\' Court',
        'ouCode': 'B31JV00',
        'visible': 'true'
      },
      {
        'name': 'Nottingham Youth Court',
        'ouCode': 'B31JZ00',
        'visible': 'true'
      },
      {
        'name': 'Nuneaton Magistrates\' Court',
        'ouCode': 'B23PP00',
        'visible': 'true'
      },
      {
        'name': 'Sandwell Magistrates\' Court',
        'ouCode': 'B20NU00',
        'visible': 'false'
      },
      {
        'name': 'Oldham Magistrates\' Court',
        'ouCode': 'B06JY00',
        'visible': 'true'
      },
      {
        'name': 'Ormskirk Magistrates\' Court',
        'ouCode': 'B04JY00',
        'visible': 'true'
      },
      {
        'name': 'Ormskirk Youth Court',
        'ouCode': 'B04JZ00',
        'visible': 'true'
      },
      {
        'name': 'Oxford Magistrates\' Court',
        'ouCode': 'B43KB00',
        'visible': 'true'
      },
      {
        'name': 'Peterborough Magistrates\' Court',
        'ouCode': 'B35KE00',
        'visible': 'true'
      },
      {
        'name': 'Peterlee Magistrates\' Court',
        'ouCode': 'B11KF00',
        'visible': 'true'
      },
      {
        'name': 'Plymouth Magistrates\' Court',
        'ouCode': 'B50KH00',
        'visible': 'true'
      },
      {
        'name': 'Plymouth Youth Court',
        'ouCode': 'B50KZ00',
        'visible': 'true'
      },
      {
        'name': 'Pontypridd Magistrates\' Court',
        'ouCode': 'B62PM00',
        'visible': 'true'
      },
      {
        'name': 'Poole Magistrates\' Court',
        'ouCode': 'B55KL00',
        'visible': 'true'
      },
      {
        'name': 'Port Talbot Magistrates\' Court',
        'ouCode': 'B62KL00',
        'visible': 'true'
      },
      {
        'name': 'Portsmouth Magistrates\' Court',
        'ouCode': 'B44KM00',
        'visible': 'true'
      },
      {
        'name': 'Prestatyn Magistrates\' Court',
        'ouCode': 'B60KN00',
        'visible': 'true'
      },
      {
        'name': 'Preston Magistrates\' Court',
        'ouCode': 'B04KO00',
        'visible': 'true'
      },
      {
        'name': 'Preston Youth Court',
        'ouCode': 'B04KP00',
        'visible': 'true'
      },
      {
        'name': 'Reading Magistrates\' Court',
        'ouCode': 'B43KQ00',
        'visible': 'true'
      },
      {
        'name': 'Redditch Magistrates\' Court',
        'ouCode': 'B22KS00',
        'visible': 'true'
      },
      {
        'name': 'Redhill Magistrates\' Court',
        'ouCode': 'B45KT00',
        'visible': 'true'
      },
      {
        'name': 'Richmond-upon-Thames Magistrates\' Court',
        'ouCode': 'B01KY00',
        'visible': 'true'
      },
      {
        'name': 'Romford Magistrates\' Court',
        'ouCode': 'B01LA00',
        'visible': 'true'
      },
      {
        'name': 'Romford Youth Court',
        'ouCode': 'B01LB00',
        'visible': 'true'
      },
      {
        'name': 'Rotherham Magistrates\' Court',
        'ouCode': 'B14LC00',
        'visible': 'true'
      },
      {
        'name': 'Runcorn Magistrates\' Court',
        'ouCode': 'B07LF00',
        'visible': 'true'
      },
      {
        'name': 'Salisbury Magistrates\' Court',
        'ouCode': 'B54WV00',
        'visible': 'true'
      },
      {
        'name': 'Salisbury Youth Court',
        'ouCode': 'B54LZ00',
        'visible': 'true'
      },
      {
        'name': 'Scarborough Magistrates\' Court',
        'ouCode': 'B12LK00',
        'visible': 'true'
      },
      {
        'name': 'Scarborough Youth Court',
        'ouCode': 'B12LL00',
        'visible': 'true'
      },
      {
        'name': 'Scunthorpe Magistrates\' Court',
        'ouCode': 'B16LL00',
        'visible': 'true'
      },
      {
        'name': 'Sevenoaks Magistrates\' Court',
        'ouCode': 'B46LN00',
        'visible': 'true'
      },
      {
        'name': 'Sevenoaks Youth Court',
        'ouCode': 'B46LO00',
        'visible': 'true'
      },
      {
        'name': 'Sheffield Magistrates\' Court',
        'ouCode': 'B14LO00',
        'visible': 'true'
      },
      {
        'name': 'Shrewsbury Magistrates\' Court',
        'ouCode': 'B22LQ00',
        'visible': 'true'
      },
      {
        'name': 'Skegness Magistrates\' Court',
        'ouCode': 'B32LS00',
        'visible': 'true'
      },
      {
        'name': 'Skipton Magistrates\' Court',
        'ouCode': 'B12LT00',
        'visible': 'true'
      },
      {
        'name': 'Slough Courthouse',
        'ouCode': 'B43LV00',
        'visible': 'true'
      },
      {
        'name': 'Solihull Magistrates\' Court',
        'ouCode': 'B20LW00',
        'visible': 'true'
      },
      {
        'name': 'South Sefton Magistrates\' Court',
        'ouCode': 'B05BW00',
        'visible': 'true'
      },
      {
        'name': 'South Shields Magistrates\' Court',
        'ouCode': 'B10LX00',
        'visible': 'true'
      },
      {
        'name': 'Southampton Magistrates\' Court',
        'ouCode': 'B44MA00',
        'visible': 'true'
      },
      {
        'name': 'Southampton Youth Court',
        'ouCode': 'B44MZ00',
        'visible': 'true'
      },
      {
        'name': 'South-East Northumberland Magistrates\' Court',
        'ouCode': 'B10BD00',
        'visible': 'true'
      },
      {
        'name': 'Southend-on-Sea Magistrates\' Court',
        'ouCode': 'B42MB00',
        'visible': 'true'
      },
      {
        'name': 'Southend-on-Sea Youth Court',
        'ouCode': 'B42MZ00',
        'visible': 'false'
      },
      {
        'name': 'Southern Derbyshire Magistrates\' Court (Derby)',
        'ouCode': 'B30PI00',
        'visible': 'true'
      },
      {
        'name': 'Southern Derbyshire Youth Court',
        'ouCode': 'B30PZ00',
        'visible': 'true'
      },
      {
        'name': 'Spalding Magistrates\' Court',
        'ouCode': 'B32MD00',
        'visible': 'true'
      },
      {
        'name': 'St. Albans Magistrates\' Court',
        'ouCode': 'B41ME00',
        'visible': 'true'
      },
      {
        'name': 'St. Helens Magistrates\' Court',
        'ouCode': 'B05MF00',
        'visible': 'true'
      },
      {
        'name': 'St. Helens Youth Court',
        'ouCode': 'B05MZ00',
        'visible': 'false'
      },
      {
        'name': 'Stafford Magistrates\' Court',
        'ouCode': 'B21MG00',
        'visible': 'true'
      },
      {
        'name': 'Staines Magistrates\' Court',
        'ouCode': 'B45MH00',
        'visible': 'true'
      },
      {
        'name': 'Stevenage Magistrates\' Court',
        'ouCode': 'B41MJ00',
        'visible': 'true'
      },
      {
        'name': 'Stockport Magistrates\' Court',
        'ouCode': 'B06MK00',
        'visible': 'true'
      },
      {
        'name': 'Stratford Magistrates\' Court',
        'ouCode': 'B01MN00',
        'visible': 'true'
      },
      {
        'name': 'Stratford Youth Court',
        'ouCode': 'B01MO00',
        'visible': 'true'
      },
      {
        'name': 'Stroud Magistrates\' Court',
        'ouCode': 'B53MP00',
        'visible': 'true'
      },
      {
        'name': 'Sunderland Magistrates\' Court',
        'ouCode': 'B10MR00',
        'visible': 'true'
      },
      {
        'name': 'Swansea Magistrates\' Court',
        'ouCode': 'B62MV00',
        'visible': 'true'
      },
      {
        'name': 'Swansea Youth Court',
        'ouCode': 'B62PO00',
        'visible': 'true'
      },
      {
        'name': 'Swindon Magistrates\' Court',
        'ouCode': 'B54MW00',
        'visible': 'true'
      },
      {
        'name': 'Swindon Youth Court',
        'ouCode': 'B54MZ00',
        'visible': 'true'
      },
      {
        'name': 'Tameside Magistrates\' Court',
        'ouCode': 'B06AN00',
        'visible': 'true'
      },
      {
        'name': 'Taunton Magistrates\' Court',
        'ouCode': 'B52MY00',
        'visible': 'true'
      },
      {
        'name': 'Taunton Youth Court',
        'ouCode': 'B52NY00',
        'visible': 'true'
      },
      {
        'name': 'Teesside Magistrates\' Court',
        'ouCode': 'B17JA00',
        'visible': 'true'
      },
      {
        'name': 'Telford Magistrates\' Court',
        'ouCode': 'B22MZ00',
        'visible': 'true'
      },
      {
        'name': 'Thames Magistrates\' Court',
        'ouCode': 'B01ND00',
        'visible': 'true'
      },
      {
        'name': 'Torquay Magistrates\' Court',
        'ouCode': 'B50NF00',
        'visible': 'true'
      },
      {
        'name': 'Tottenham Magistrates\' Court',
        'ouCode': 'B01FE00',
        'visible': 'true'
      },
      {
        'name': 'Trafford Magistrates\' Court',
        'ouCode': 'B06LH00',
        'visible': 'true'
      },
      {
        'name': 'Truro Magistrates\' Court',
        'ouCode': 'B50NL00',
        'visible': 'true'
      },
      {
        'name': 'Uxbridge Magistrates\' Court',
        'ouCode': 'B01NM00',
        'visible': 'true'
      },
      {
        'name': 'Uxbridge Youth Court',
        'ouCode': 'B01NO00',
        'visible': 'true'
      },
      {
        'name': 'Wakefield Magistrates\' Court',
        'ouCode': 'B13NN00',
        'visible': 'true'
      },
      {
        'name': 'Wakefield Youth Court',
        'ouCode': 'B13NZ00',
        'visible': 'true'
      },
      {
        'name': 'Walsall Magistrates\' Court',
        'ouCode': 'B20NQ00',
        'visible': 'true'
      },
      {
        'name': 'Waltham Forest Magistrates\' Court',
        'ouCode': 'B01NR00',
        'visible': 'true'
      },
      {
        'name': 'Warrington Magistrates\' Court',
        'ouCode': 'B07NV00',
        'visible': 'true'
      },
      {
        'name': 'Watford Magistrates\' Court',
        'ouCode': 'B41NW00',
        'visible': 'true'
      },
      {
        'name': 'Wellingborough Magistrates\' Court',
        'ouCode': 'B34NX00',
        'visible': 'true'
      },
      {
        'name': 'Wellingborough Youth Court',
        'ouCode': 'B34NZ00',
        'visible': 'true'
      },
      {
        'name': 'Welshpool Magistrates\' Court',
        'ouCode': 'B63NZ00',
        'visible': 'true'
      },
      {
        'name': 'Welshpool Youth Court',
        'ouCode': 'B63NY00',
        'visible': 'true'
      },
      {
        'name': 'West Berkshire Magistrates\' Court',
        'ouCode': 'B43JH00',
        'visible': 'true'
      },
      {
        'name': 'West Norfolk Magistrates\' Court',
        'ouCode': 'B36HN00',
        'visible': 'true'
      },
      {
        'name': 'Westminster Magistrates\' Court',
        'ouCode': 'B01IX00',
        'visible': 'true'
      },
      {
        'name': 'Weymouth Magistrates\' Court',
        'ouCode': 'B55OE00',
        'visible': 'true'
      },
      {
        'name': 'Weymouth Youth Court',
        'ouCode': 'B55OZ00',
        'visible': 'true'
      },
      {
        'name': 'Wigan Magistrates\' Court',
        'ouCode': 'B06OJ00',
        'visible': 'true'
      },
      {
        'name': 'Willesden Magistrates\' Court',
        'ouCode': 'B01CE00',
        'visible': 'true'
      },
      {
        'name': 'Wimbledon Magistrates\' Court',
        'ouCode': 'B01OK00',
        'visible': 'true'
      },
      {
        'name': 'Wimbledon Youth Court',
        'ouCode': 'B01OL00',
        'visible': 'true'
      },
      {
        'name': 'Winchester Combined Court',
        'ouCode': 'B44WZ00',
        'visible': 'true'
      },
      {
        'name': 'Wirral Magistrates\' Court',
        'ouCode': 'B05BK00',
        'visible': 'true'
      },
      {
        'name': 'Wirral Youth Court',
        'ouCode': 'B05NO00',
        'visible': 'true'
      },
      {
        'name': 'Wolverhampton Magistrates\' Court',
        'ouCode': 'B20OQ00',
        'visible': 'true'
      },
      {
        'name': 'Worcester Magistrates\' Court',
        'ouCode': 'B22OS00',
        'visible': 'true'
      },
      {
        'name': 'Workington Magistrates\' Court',
        'ouCode': 'B03OT00',
        'visible': 'true'
      },
      {
        'name': 'Worksop Magistrates\' Court',
        'ouCode': 'B31OU00',
        'visible': 'true'
      },
      {
        'name': 'Worthing Magistrates\' Court',
        'ouCode': 'B47OV00',
        'visible': 'true'
      },
      {
        'name': 'Wrexham Magistrates\' Court',
        'ouCode': 'B60OW00',
        'visible': 'true'
      },
      {
        'name': 'Wrexham Youth Court',
        'ouCode': 'B60OZ00',
        'visible': 'true'
      },
      {
        'name': 'Wycombe Magistrates\' Court',
        'ouCode': 'B43OX00',
        'visible': 'true'
      },
      {
        'name': 'Yate Magistrates\' Court',
        'ouCode': 'B52OY00',
        'visible': 'true'
      },
      {
        'name': 'Yeovil Magistrates\' Court',
        'ouCode': 'B52OZ00',
        'visible': 'true'
      },
      {
        'name': 'York Magistrates\' Court',
        'ouCode': 'B12PA00',
        'visible': 'true'
      },
      {
        'name': 'York Youth Court',
        'ouCode': 'B12PB00',
        'visible': 'true'
      },
      {
        'name': 'Amersham Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Aylesbury Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Basildon Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Birmingham Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Blackfriars Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Bolton Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Bournemouth Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Bradford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Bristol Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Burnley Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Caernarfon Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Cambridge Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Canterbury Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Cardiff Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Carlisle Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Carmarthen Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Central Criminal Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Chelmsford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Chester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Chichester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Coventry Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Crown Court Annex, Newton Street',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Croydon Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Derby Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Doncaster Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Dorchester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Exeter Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Gloucester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Grimsby Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Guildford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Harrow Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Hereford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Hove Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Inner London Sessions House Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Ipswich Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Isle of Wight Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Isleworth Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Kingston Upon Hull Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Kingston Upon Thames Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Knutsford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Leeds Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Leicester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Lewes Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Lincoln Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Liverpool Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Luton Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Maidstone Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Manchester Crown Court - Crown Square',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Manchester Crown Court - Minshull St',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Merthyr Tydfil Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Mold Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Newcastle Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Newcastle Moot Hall - Crown',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Newport Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Northampton Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Norwich Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Nottingham Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Oxford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Peterborough Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Plymouth Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Portsmouth Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Preston Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Reading Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Salisbury Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Sheffield Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Shrewsbury Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Snaresbrook Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Southampton Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Southwark Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'St Albans Crown',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Stafford Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Stoke Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Swansea Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Swindon Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Taunton Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Teesside Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Truro Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Warrington Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Warwick Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Weymouth and Dorchester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Winchester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Wolverhampton Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Wood Green Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Woolwich Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'Worcester Crown Court',
        'ouCode': '',
        'visible': 'false'
      },
      {
        'name': 'York Crown Court',
        'ouCode': '',
        'visible': 'false'
      }]);
  }

  getCourtRoomsEntities(): Observable<string[]> {
    return of([
      '0 - LAP',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '85',
      '86'
    ]);
  }
}
