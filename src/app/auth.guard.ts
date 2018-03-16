import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from './login/mock-login.service';

@Injectable()
export class AuthGuard {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }
}
