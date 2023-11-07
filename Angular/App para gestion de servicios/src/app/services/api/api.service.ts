import { Injectable } from '@angular/core';
import { login } from "../../types/login.ts";
import { response } from "../../types/response.ts";
import { pacient } from "../../types/pacientlist.type.ts";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="http://localhost:3000/"; // URL of the API

  constructor(private http:HttpClient) { }

  onLogin(data:login):Observable<response> {
    return this.http.post<response>(this.url+"login",data);
  }
  getAllPacients(page:number):Observable<pacient[]>{
    return this.http.get<pacient[]>(this.url+"pacients?page="+page);

  }

}
