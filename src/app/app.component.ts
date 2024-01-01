import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  //templateUrl: './login/login.component.html',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Movie-App';
  name = 'Ahmad';
//   email = 'ahmad@ossama.com'
//   password='125555'
  // Adding login component
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
