import { Injectable } from '@angular/core';
import { login } from "../../types/login.ts";
import { response } from "../../types/response.ts";
import { pacient } from "../../types/pacientlist.ts";
import { pacientcomplete } from "../../types/pacient.ts";
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
  getPacient(id:number):Observable<pacientcomplete>{
    return this.http.get<pacientcomplete>(this.url+"pacients/"+id);
  }
  putPacient(pacient:pacient):Observable<response>{
    return this.http.put<response>(this.url+"pacient/",pacient);
  }
  deletePacient(pacient:pacient):Observable<response>{
    const options = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:pacient
    };
    return this.http.delete<response>(this.url+"pacientdelete/",options);
  }
  postPacient(pacient:pacient):Observable<response>{
    return this.http.post<response>(this.url+"pacient",pacient);
  }
}
