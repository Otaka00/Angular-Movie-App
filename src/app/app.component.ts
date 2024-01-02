import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CommonModule, RouterOutlet, LoginComponent],
  // templateUrl: './Components/login/login.component.html',
  templateUrl: './Components/catalog/catalog.component.html',
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    name = 'Ahmad';
    constructor(private router: Router) {}
//     email = 'ahmad@ossama.com'
//     password='125555'
//     Adding login component
//     email: string = '';
//     password: string = '';
//     invalidEmailFormat: boolean = false;
//
//
//     login() {
//       // Add logic to check user credentials (hardcoded for now)
//       if (this.email.includes('@') && this.email.includes('.')) {
//         // Successful login
//         this.router.navigate(['/catalog']);
//       } else {
//         // Invalid email format
//         this.invalidEmailFormat = true;
//       }
//     }
  title = 'showtime';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.navbg = {}
    }
  }
}
