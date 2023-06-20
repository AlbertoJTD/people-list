import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  firebaseURL: string = 'firebase_url';

  constructor(private httpClient: HttpClient) { }

  savePeople(personas: Persona[]): void {
    this.httpClient.post(this.firebaseURL, personas)
      .subscribe(
        response =>  console.log(response),
        error => console.log('Error while saving people')
    );
  }
}