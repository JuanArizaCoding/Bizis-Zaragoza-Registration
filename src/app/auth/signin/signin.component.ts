import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,
    private router: Router) { }

  login() {
    const logged = this.authService.login(this.email, this.password);
    if(logged) {
      this.router.navigateByUrl('/bizis/list').then(
        (routechange:boolean) => {
          console.log(routechange);
        }
      );
    } else {
      alert('LOGIN ERROR');
    }
  }

  signup() { 
    this.router.navigateByUrl('/auth/signup').then(
      (routechange:boolean) => {
        console.log(routechange);
      }
    );
  }

}
