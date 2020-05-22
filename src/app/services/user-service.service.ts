import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../models/UserModel';

const url:string = "https://reqres.in/api/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(id=0):Observable<UserModel[]> {
    let idtag = id>0 ? "/${id}" : "";
    return this.http.get<UserModel[]>(`${url}users${idtag}`);
  }
  
  loginUser(user: UserModel):Observable<UserModel> {
    return this.http.post<UserModel>(`${url}login`, user, httpOptions);
  }
  
  addUser(user: UserModel):Observable<UserModel> {
    return this.http.post<UserModel>(`${url}register`, user, httpOptions);
  }
}
