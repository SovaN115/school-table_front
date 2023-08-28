import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Table } from './table';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TableDTO } from './tableDTO';

@Injectable({
  providedIn: 'root'
})
export class TableService extends HttpService {

  constructor(private http: HttpClient) { 
    super()
  }

  getAll(templateId: number): Observable<{data: Table[]}>{
    return this.http.get<{data: Table[]}>(`${this.url}/table/${templateId}`, {headers: this.headers});
  }

  patch(table: TableDTO, id: string): Observable<Object> {
    let body = JSON.stringify({...table});
    return this.http.patch(`${this.url}/table/${id}`, body, {headers: this.headers});
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/table/${id}`, {headers: this.headers});
  }
}
