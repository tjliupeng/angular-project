import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
