import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'People list';
  personas: Persona[] = [
    new Persona('John', 'Wick'),
    new Persona('Jonny', 'Cage')
  ];
  nombreInput: string = '';
  apellidoInput: string = '';

  addPerson(): void {
    this.personas.push(new Persona(this.nombreInput, this.apellidoInput))
  }
}
