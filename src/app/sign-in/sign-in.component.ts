import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user = {
    username: '',
    password: ''
  };
  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission, e.g., send data to a server
      console.log('Form submitted:', this.user);
    }
  }
}
