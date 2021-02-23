import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, Subject } from 'rxjs';
import { User } from '../../../../server1/schemas/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/user';
  private logger = new Subject<boolean>();
  loggedIn = false;

  constructor(private http: HttpClient) {
    this.setLogin();
  }

  getCurrentUser(): User {
    const storageUser = localStorage.getItem('currentUser');
    return storageUser ? JSON.parse(storageUser) : null;
  }

  setLogin() {
    if (!this.getCurrentUser()) {
      return;
    }
    this.loggedIn = true;
    this.logger.next(this.loggedIn);
  }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user).pipe(
      map((user: User) => {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ ...user, tasks: [] })
        );
        this.setLogin();
        return user;
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/find`);
  }

  forgotPassword(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/forgotPassword/${email}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user).pipe(
      map((user) => {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ ...user, tasks: [] })
        );
        this.setLogin();
        return user;
      })
    );
  }
}
