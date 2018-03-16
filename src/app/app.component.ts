import { Component } from '@angular/core';
import { LoginService } from './login/mock-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
