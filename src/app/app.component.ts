import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'People list';
  apiKeyFirebase: string = 'key';
  authDomainFirebase: string = 'domain';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: this.apiKeyFirebase,
      authDomain: this.authDomainFirebase,
    });
  }

  authenticatedUser(): boolean {
    return this.loginService.isAuthenticate();
  }

  endSession(): void {
    this.loginService.logout();
  }
}
