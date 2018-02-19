import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../../../interfaces/user.interface';
import { PasswordValidation } from './../../../validators/email-matcher';
import { RegisterService } from './../../../services/register.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['',  [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', Validators.required]
    }, {validator: PasswordValidation.MatchPassword});
  }

  public onRegister(): void {
    const user: User = this.registerForm.value;
    console.log(user);
  }
}
