import { Injectable } from '@angular/core';
import { Group } from './group';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { GroupDTO } from './groupDTO';

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends HttpService {

  constructor(private http: HttpClient) { 
    super();
  }

  getAll(templateId: number): Observable<{data: Group[]}>{
    return this.http.get<{data: Group[]}>(`${this.url}/group/${templateId}`, {headers: this.headers});
  }

  getOne(id: number): Observable<{data: Group[]}> {
    return this.http.get<{data: Group[]}>(`${this.url}/group/${id}`, {headers: this.headers});
  }

  create(group: GroupDTO): Observable<Object> {
    let body = JSON.stringify({...group});
    return this.http.post(`${this.url}/group`, body, {headers: this.headers});
  }

  patch(group: GroupDTO, id: string): Observable<Object> {
    let body = JSON.stringify({...group});
    return this.http.patch(`${this.url}/group/${id}`, body, {headers: this.headers});
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/group/${id}`, {headers: this.headers});
  }
}
