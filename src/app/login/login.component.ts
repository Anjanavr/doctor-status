import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './mock-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  private validCredentials: boolean;
  loginBtnDisabled: boolean;
  private pwdCheck: boolean;
  public errorMessage: string;
  isLoggedIn: any;

  constructor(private loginService: LoginService, private router: Router) {
    this.submitted = false;
    this.validCredentials = false;
    this.pwdCheck = false;
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.pattern('^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
      ]),
      password: new FormControl('', [Validators.required])
    });
  }
  validateUser(user, isValid: boolean) {
    this.submitted = true; // set form submit to true
    if (isValid) {
      this.loginService.logIn(user).subscribe(data => {
        const regUser = data['user'];
        if (regUser.email === user.email && regUser.password === user.password) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid Credentials';
          this.router.navigate(['']);
        }
      });
    }
  }
  clearErrorMessage() {
    this.errorMessage = '';
  }
}
