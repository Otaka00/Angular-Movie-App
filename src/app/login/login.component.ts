import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  invalidEmailFormat: boolean = false;

  constructor(private router: Router) {}

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
