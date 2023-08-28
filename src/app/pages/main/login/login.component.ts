import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  })

  constructor(private auth: AuthService){}

  onSubmit(){
    this.auth.auth(this.form.value.login, this.form.value.password)

  }
}
