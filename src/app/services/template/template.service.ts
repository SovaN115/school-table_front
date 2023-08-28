import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from './template';
import { TemplateDTO } from './templateDTO';

@Injectable({
  providedIn: 'root'
})
export class TemplateService extends HttpService {

  constructor( private http: HttpClient) { 
    super();
  }

  getAll(): Observable<{data: Template[]}> {

    return this.http.get<{data: Template[]}>(`${this.url}/template`, {headers: this.headers});

  }

  getOne(id: number): Observable<{data: Template}> {

    return this.http.get<{data: Template}>(`${this.url}/template/${id}`, {headers: this.headers});
    
  }

  getSelected(): Observable<{data: Template}> {
    return this.http.get<{data: Template}>(`${this.url}/template/selected`, {headers: this.headers});
  }

  create(template: TemplateDTO): Observable<Object> {

    let body = JSON.stringify({...template});
    return this.http.post(`${this.url}/template`, body, {headers: this.headers});

  }

  apply( id: string): Observable<Object> {
    return this.http.patch(`${this.url}/template/${id}`, {headers: this.headers});

  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/template/${id}`, {headers: this.headers});
  }
}
