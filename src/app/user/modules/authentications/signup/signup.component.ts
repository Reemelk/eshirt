import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../../interfaces/user.interface';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['',  [Validators.required]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]]
    });
  }

  public onRegister(): void {
    const user: User = this.registerForm.value;
  }
}
