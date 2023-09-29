import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private fb: FormBuilder, private http:HttpClient){
    this.signupForm = this.fb.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Username: ['', Validators.required],
      email: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }


  url='http://localhost:3000/auth/signup'
  signupForm: any;

  onSubmit() {
    const userData = this.signupForm.value;
    this.http.post(this.url, userData).subscribe(
      response => {
        console.log('User signup successful.');
      },
      error => {
        console.log('User signup failed: ', error);
      }
    );
  }




}
