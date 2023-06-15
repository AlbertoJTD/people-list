import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';

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

  constructor(private logginService: LogginService) { }
  
  personaAgregada(persona: Persona): void {
    this.logginService.enviarMensajeAConsola('Hello from app.component')
    this.personas.push(persona);
  }
}
