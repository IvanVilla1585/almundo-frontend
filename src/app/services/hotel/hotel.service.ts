import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class HotelService {
  private API_URL: string;
  private headers: HttpHeaders;
  constructor(private _http: HttpClient) {
    this.API_URL = 'http://localhost:8081';
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  findHotels(query): Observable<Object> {
    return this._http.get(`${this.API_URL}/hotels${query}`, {headers: this.headers});
  }
}
