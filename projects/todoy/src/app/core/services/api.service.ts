import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'projects/todoy/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  formatError(error: any) {
    return throwError(error.error);
  }


  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
    .pipe(catchError(this.formatError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`,
    JSON.stringify(body)).pipe(this.formatError);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`,
    JSON.stringify(body)).pipe(this.formatError);
  }

  delete(path): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`)
    .pipe(this.formatError);
  }
}
