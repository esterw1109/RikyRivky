import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../../../server1/schemas/task';
import { UserService } from './user.service';
import { User } from '../degem/degem';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:3000/task';

  constructor(private http: HttpClient, private userService: UserService) {}

  // getMusic() {
  //   return this.http.get(`${this.url}/music`);
  // }

  getTasks(): Observable<Task[]> {
    const user = this.userService.getCurrentUser();
    return this.http
      .get<Task[]>(`${this.url}/user/${user._id}/find`)
      .pipe(map((res: any) => res.tasks));
  }

  findTask(id: string): Observable<Task> {
    const user = this.userService.getCurrentUser();
    return this.http.get<Task>(`${this.url}/user/${user._id}/find/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    const user = this.userService.getCurrentUser();
    return this.http.post<Task>(`${this.url}/user/${user._id}`, task);
  }

  updateTask(taskId: string, task: Task): Observable<Task> {
    const user = this.userService.getCurrentUser();
    return this.http.post<Task>(
      `${this.url}/user/${user._id}/update/${taskId}`,
      task
    );
  }

  removeTask(id: string) {
    const user = this.userService.getCurrentUser();
    return this.http.get<Task>(`${this.url}/user/${user._id}/remove/${id}`);
  }
}
