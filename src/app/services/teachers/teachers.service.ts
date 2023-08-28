import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpService } from '../http/http.service';
import { Observable, map } from 'rxjs';
import { TeacherDTO } from './teacherDTO';
import Teacher from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService extends HttpService{

  constructor( private http: HttpClient) { 
    super();
  }

  getAll(templateId: number): Observable<Teacher[]> {

    return this.http.get<TeacherDTO[]>(`${this.url}/teacher/${templateId}`, {headers: this.headers}).pipe(
      map((data) => {
        console.log(data)
        return data.map((item) => {
          return new Teacher(item.id!, item.name!, item.surname!, item.patronymic!)
        })
      })
    );

  }

  getOne(id: number): Observable<{data: Teacher[]}> {

    return this.http.get<{data: Teacher[]}>(`${this.url}/teacher/${id}`, {headers: this.headers});
    
  }

  create(teacher: TeacherDTO): Observable<Object> {

    let body = JSON.stringify({...teacher});
    return this.http.post(`${this.url}/teacher`, body, {headers: this.headers});

  }

  patch(teacher: TeacherDTO, id: string): Observable<Object> {

    let body = JSON.stringify({...teacher});
    return this.http.patch(`${this.url}/teacher/${id}`, body, {headers: this.headers});

  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/teacher/${id}`, {headers: this.headers});
  }

}
