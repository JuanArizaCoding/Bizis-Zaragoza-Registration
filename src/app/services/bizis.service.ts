import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Bizis } from '../models/bizis';
@Injectable({
  providedIn: 'root'
})
export class BizisService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Bizis[]> {
    const apiUrl: string =
      'http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/estacion-bicicleta.json';
    let params = new HttpParams();
    params = params.append('rf', 'html');
    params = params.append('results_only', 'false');
    params = params.append('srsname', 'wgs84');
    params = params.append('rows', '1000');

    return this.httpClient.get(apiUrl, { params: params }).pipe(
      //delay(5000),
      map((data: any) => {
        console.log('DATA:::', data);
        return data.result.map((item:JSON) => {
          return new Bizis(item);
        });
      })
    );
  }
}
