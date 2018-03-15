import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  isLoggedIn = false;
  loggedInUser;

  constructor (private http: HttpClient, private router: Router) {}
  logIn(user) {
    this.isLoggedIn = true;
    return this.http.get('../assets/data/user-details.json');
  }

  logOut() {
    this.isLoggedIn = false;
    this.loggedInUser = {};
    this.router.navigate(['/login']);
  }
}
