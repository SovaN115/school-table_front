import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {

  constructor(private http: HttpClient, private router: Router) { 
    super()
  }

  auth(login: string, password: string) {
    this.http.post<{token?: string, error?: string}>(`${this.url}/auth`, {login: login, password: password}, {headers: this.headers}).subscribe((res) => {
      if(res.token) {
        localStorage.setItem('token', JSON.stringify({token: res.token, time: new Date().getTime()}));
        this.router.navigateByUrl('/admin');
      }
    });
  }

}
