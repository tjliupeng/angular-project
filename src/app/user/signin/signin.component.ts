import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoginError = false;
  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(userName, password) {
     this.userService.userAuthentication(userName, password).subscribe((data: any) =>  {
      this.isLoginError = false;
      this.userService.isLogin = true;
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/dicoms']);
    },
    (err: HttpErrorResponse) =>  {
      console.error(err);
      this.isLoginError = true;
    });
  }
}
