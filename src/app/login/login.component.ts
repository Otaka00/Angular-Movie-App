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

  constructor(private router: Router) {}

  ngOnInit(): void{
  }
  email: string = '';
  password: string = '';
  invalidEmailFormat: boolean = false;

  login() {
    // Add logic to check user credentials (hardcoded for now)
    if (this.email.includes('@') && this.email.includes('.')) {
      // Successful login
      this.router.navigate(['/catalog']);
    } else {
      // Invalid email format
      this.invalidEmailFormat = true;
    }
  }
}
