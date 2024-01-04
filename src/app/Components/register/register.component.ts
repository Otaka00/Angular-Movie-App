import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      reenteredPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
register() {
if (this.registerForm.valid) {
//  const email = this.registerForm.value.email;
//
//       // Check if the email is already taken
//       if (this.userService.isEmailTaken(email)) {
//         alert('Email is already taken. Please choose another one.');
//       } else {
//         // Add the new user
//         this.userService.addUser({
//           email: email,
//           password: this.registerForm.value.password,
//         });
//
//         // Navigate to login after successful registration
//         this.router.navigate(['/login']);
//         alert('Congrats! Account created successfully.');
//       }
//     } else {
//       alert('Please enter all required fields.');
//     }
      const { email, password } = this.registerForm.value;
      this.userService.saveUser(email, password);
      this.router.navigate(['/login']);
      alert('Congrats! Account created successfully.');
 }
    else alert('Please enter all required fields.');
    console.log('Registration form submitted:', this.registerForm.value);
  }
  ngOnInit(): void {
  }

}
