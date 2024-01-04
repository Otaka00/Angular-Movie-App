import { Component,HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  navbg:any;

    isLoginRoute: boolean = false;
    constructor(private router: Router) {
      // Subscribe to router events to detect route changes
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Update isLoginRoute based on the current route
          this.isLoginRoute = event.url.includes('login') || event.url.includes('register');
        }
      });
    }
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#ffff00'
      }
    }else
    {
        this.navbg = {
             'background-color':'#ffff00'
}
    }
   }
}
