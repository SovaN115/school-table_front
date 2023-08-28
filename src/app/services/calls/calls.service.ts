import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Call } from './call';
import { CallDTO } from './callDTO';

@Injectable({
  providedIn: 'root'
})
export class CallsService extends HttpService {

  constructor(private http: HttpClient) { 
    super();
  }

  getAll(templateId: number): Observable<{data: Call[]}>{
    return this.http.get<{data: Call[]}>(`${this.url}/call/${templateId}`, {headers: this.headers});
  }

  getOne(id: number): Observable<{data: Call[]}> {
    return this.http.get<{data: Call[]}>(`${this.url}/call/${id}`, {headers: this.headers});
  }

  create(lesson: number, templateId: number): Observable<Object> {
    return this.http.post(`${this.url}/call`, {lesson_number: lesson, template_id: templateId}, {headers: this.headers});
  }

  patch(call: CallDTO, id: string): Observable<Object> {
    let body = JSON.stringify({...call});
    return this.http.patch(`${this.url}/call/${id}`, body, {headers: this.headers});
  }
}
