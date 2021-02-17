import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {User} from '../../../../server1/schemas/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;
  private url = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
   }

   getUsers():Observable<User[]> {
     return this.http.get<User[]>(`${this.url}/find`);
   }
   getUser(id):Observable<User> {
    return this.http.get<User>(`${this.url}/find/${id}`);
  }
  creatUser(user:User):Observable<User> {
    return this.http.post<User>(this.url,user);
  }

}
