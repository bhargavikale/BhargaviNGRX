import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { login_start } from '../state/action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup;
    constructor(private store:Store<AppState>){

    }
    ngOnInit():void{
      this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required,Validators.email]),
        password: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      })
    }
    OnLogin(){
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.store.dispatch(login_start({email, password}));
    }
}
