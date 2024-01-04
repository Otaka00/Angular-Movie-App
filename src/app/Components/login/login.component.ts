import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,  private userService: UserService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }


navigateToRegister() {
    this.router.navigate(['/register']);
  }
  onSubmit() {

     if (this.loginForm.valid) {
         const { email, password } = this.loginForm.value;
         const savedUser = this.userService.getUser();

         if (savedUser && savedUser.email === email && savedUser.password === password){
           this.router.navigate(['']);
           alert('Logged in successfully');
           }

   else alert('Incorrect email or password. Please try again!');
 }
    else alert('Please fill all required fields. ');

 }
}
