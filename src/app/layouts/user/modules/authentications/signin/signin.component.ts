import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { User } from './../../../interfaces/user.interface';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  error$: Observable<boolean>;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginFormBuilder();
    this.error$ = this.authService.statusCredentials();
  }
  public onLogin(): void {
    const user: User = this.loginForm.value;
    this.authService.signIn(user);
  }

  private loginFormBuilder(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}
