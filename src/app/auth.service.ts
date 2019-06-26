import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
//id = 0;
//vap : string = '';


registerToken( token: string)
{
 // this.vap = this.vap + 'a';
//this.id = this.id + 1;

localStorage.setItem(token, 'token')


}

  sendToken(token : string) {

    if (localStorage.getItem(token) !== null)
    {
    localStorage.setItem('LoggedInUser', token)
    }
  }
  getToken() {
    return localStorage.getItem('LoggedInUser')

  }
  isLoggedIn() {

    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['Login']);
  }

}
