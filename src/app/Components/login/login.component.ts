import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  signedUsers: any[] = [];
  signUpObj: any = {
    username: '',
    email: '',
    password: ''
  }
 loginObj: any = {
    email: '',
    password: ''
  }
  constructor(private router: Router) {}

  ngOnInit(): void{
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null)
      this.signedUsers= JSON.parse(localData);
  }
  onLogin(){
  debugger
  const isUserAvailable = this.signedUsers.find(u => u.email == this.loginObj.email && u.password == this.loginObj.password);
  if(isUserAvailable != undefined)
    alert("User login sucessfully");
  else alert("Incorrect email or password. Please Try again!");
  }
  onSignUp(){
    this.signedUsers.push(this.signUpObj);
    localStorage.setItem('signedUsers', JSON.stringify(this.signedUsers));
    this.signUpObj = {
             username: '',
             email: '',
             password: ''
           }
  }


//   email: string = '';
//   password: string = '';
//   invalidEmailFormat: boolean = false;
//
//   login() {
//     // Add logic to check user credentials (hardcoded for now)
//     if (this.email.includes('@') && this.email.includes('.')) {
//       // Successful login
//       this.router.navigate(['/catalog']);
//     } else {
//       // Invalid email format
//       this.invalidEmailFormat = true;
//     }
//   }
}
