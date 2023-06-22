import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  firebaseURL: string = 'firebase_url';

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  savePeople(personas: Persona[]): void {
    const token = this.loginService.getIdToken();
    this.httpClient.put(`${this.firebaseURL}/data.json?auth=${token}`, personas)
      .subscribe(
        response =>  console.log(response),
        error => console.log('Error while saving people')
    );
  }

  loadData(): Observable<any> {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(`${this.firebaseURL}/data.json?auth=${token}`);
  }

  editPersona(index: number, persona: Persona): void {
    const token = this.loginService.getIdToken();
    let url: string = `${this.firebaseURL}/data/${index}.json?auth=${token}`;
    this.httpClient.put(url, persona).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  deletePersona(index: number): void {
    const token = this.loginService.getIdToken();
    let url: string = `${this.firebaseURL}/data/${index}.json?auth=${token}`;
    this.httpClient.delete(url).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}