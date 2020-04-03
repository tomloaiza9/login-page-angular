import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService: any;


  constructor( authService: AuthServiceService) {
    this.authService = authService;
  }
  ngOnInit(): void {

  }

  async signIn(): Promise<void> {
    await this.authService.signIn();
  }

  signOut(): void {
    this.authService.signOut();
  }
}

