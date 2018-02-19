import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static MatchPassword(ac: AbstractControl) {
    let password = ac.get('password').value;
    let repassword = ac.get('repassword').value;
    if (password != repassword) {
      ac.get('repassword').setErrors({MatchPassword: true})
    } else {
      return null;
    }
  }
}
