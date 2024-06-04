import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Arithmetic } from '../models/arithmetic';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArithService {

  constructor(
    private messageService:MessageService,
    private http: HttpClient
  ) { }
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }; 

  private authUrl: string = `${environment.baseUrl}/arith`;

  process(input:Arithmetic): Observable<Arithmetic>{
    this.log("Solving for " + input.toSolve);
    return this.http.post<Arithmetic>(`${this.authUrl}/process`, input,this.httpOptions)
  }





  log(message:string){
    console.log(`Arithmetic Service: ${message}`)
  }
}
