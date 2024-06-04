import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SimplePack } from '../models/simple-packet';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private authUrl: string = `${environment.baseUrl}/simple`;

  process(input:SimplePack): Observable<SimplePack>{
    return this.http.post<SimplePack>(`${this.authUrl}/plusone`,input,this.httpOptions)
    .pipe(tap(x=> 
        // logs the following message
        console.log(`Process result "${x.result}"`)),
      );
  }

}
