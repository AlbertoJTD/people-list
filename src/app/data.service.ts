import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DataService {
  firebaseURL: string = 'firebase_url';

  constructor(private httpClient: HttpClient) { }

  savePeople(personas: Persona[]): void {
    this.httpClient.put(this.firebaseURL, personas)
      .subscribe(
        response =>  console.log(response),
        error => console.log('Error while saving people')
    );
  }

  loadData(): Observable<any> {
    return this.httpClient.get(this.firebaseURL);
  }
}