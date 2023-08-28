import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, map } from 'rxjs';
import { Group } from '../groups/group';
import { LessonDTO } from './lessonDTO';
import Lesson from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService extends HttpService {

  constructor(private http: HttpClient) { 
    super();
  }

  getAll(templateId: number): Observable<Lesson[]>{
    return this.http.get<LessonDTO[]>(`${this.url}/lesson/${templateId}`, {headers: this.headers}).pipe(
      map((data) => {
        console.log(data)
        return data.map((item) => {
          return new Lesson(item.id!, item.name!, item.teacher!);
        })
      })
    );
  }

  getOne(id: string): Observable<LessonDTO> {
    return this.http.get<LessonDTO>(`${this.url}/lessonn/${id}`, {headers: this.headers});
  }

  create(lesson: LessonDTO): Observable<Object> {
    let body = JSON.stringify({...lesson});
    return this.http.post(`${this.url}/lesson`, body, {headers: this.headers});
  }

  patch(lesson: LessonDTO, id: string): Observable<Object> {
    let body = JSON.stringify({...lesson});
    return this.http.patch(`${this.url}/lesson/${id}`, body, {headers: this.headers});
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/lesson/${id}`, {headers: this.headers});
  }
  
}
