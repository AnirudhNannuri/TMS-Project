import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {

  error: string = null;
  isLoading = false;
  isLoginMode = "LogIn";
  isSignupMode = "SignUp";

  images = [
    "../../images/bg-img1.jpg",
    "../../images/bg-img2.jpg",
    "../../images/img3.jpg",
    "../../images/img4.jpg"
  ];

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs : Observable<AuthResponseData>

    this.isLoading = true;

    if(this.isLoginMode) {
      authObs = this.authService.logIn(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
