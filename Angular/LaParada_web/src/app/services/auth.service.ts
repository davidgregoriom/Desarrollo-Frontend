import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model.ts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<User> {
    return this.http.post<User>('/api/login', credentials);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/register', user);
  }
}
