import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ta-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username: string = "sepp"
  password: string = "1234"

}
