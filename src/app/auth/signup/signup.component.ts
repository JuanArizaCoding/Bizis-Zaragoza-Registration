import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  signup() {
    console.log(this.signupForm.value);
    const user:User = new User(this.signupForm.value);
    this.authService.signup(user);
    this.router.navigate(['/auth/signin']);
  }

  cancel() {
    this.signupForm.reset();
    this.router.navigate(['/auth/signin']);
  }

}
