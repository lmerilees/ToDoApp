import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
uri = 'http://localhost:4000/tasks';
  constructor(private http: HttpClient) { }
  addTask(TaskName, TaskDescription) {
    const obj = {
      TaskName,
      TaskDescription
    };
    console.log(obj);
    this.http.post('${this.uri}/add', obj)
  }
}
