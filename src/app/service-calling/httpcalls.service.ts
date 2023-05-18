import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {

  constructor(private http: HttpClient) { }

  listAll(): Observable<any> {
    return this.http.get('http://localhost:3000/apiSelectAll');
  }

  listSingle(data: any): Observable<any> {
    return this.http.get(`http://localhost:3000/apiSelect/${data}`);
  }

  add(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/apiOperation', data);
  }

  delete(data: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/apiRemove/${data}`);
  }

}
