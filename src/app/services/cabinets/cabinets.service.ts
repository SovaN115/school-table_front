import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabinet } from './cabinet';
import { HttpService } from '../http/http.service';
import { CabinetDTO } from './cabinetDTO';

@Injectable({
  providedIn: 'root'
})
export class CabinetsService extends HttpService {

  constructor(private http: HttpClient) { 
    super();
  }

  getAll(templateId: number): Observable<{data: Cabinet[]}>{
    return this.http.get<{data: Cabinet[]}>(`${this.url}/cabinet/${templateId}`, {headers: this.headers});
  }

  getOne(id: number): Observable<{data: Cabinet[]}> {
    return this.http.get<{data: Cabinet[]}>(`${this.url}/cabinet/${id}`, {headers: this.headers});
  }

  create(cabinet: CabinetDTO): Observable<Object> {
    let body = JSON.stringify({...cabinet});
    return this.http.post(`${this.url}/cabinet`, body, {headers: this.headers});
  }

  patch(cabinet: CabinetDTO, id: string): Observable<Object> {
    let body = JSON.stringify({...cabinet});
    return this.http.patch(`${this.url}/cabinet/${id}`, body, {headers: this.headers});
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/cabinet/${id}`, {headers: this.headers});
  }
}
