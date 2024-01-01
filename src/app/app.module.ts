Add ngmodel for forms
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Import the AppComponent
import { LoginComponent } from './login.component'; // Import the LoginComponent

@NgModule({
  declarations: [
    // your components here
    LoginComponent,
    AppComponent
  ],
  imports: [
    // other modules
    FormsModule, // Add this line
  ],
  bootstrap: [AppComponent],
})
