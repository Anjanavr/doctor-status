import { Component } from '@angular/core';
import { LoginService } from './login/mock-login.service';
import { Router } from '@angular/router';
import {  } from './login/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  currentUrl: any;
  constructor (private loginService: LoginService, private route: Router) {}
  logout() {
    this.loginService.logOut();
  }
  changeOfRoutes() {
    this.currentUrl = this.route.url;
  }
}
