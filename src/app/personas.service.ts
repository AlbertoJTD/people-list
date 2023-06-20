import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable() // Indicar que se usara un servicio dentro del servicio 'PersonasService' se usara el servicio 'LogginService'
export class PersonasService {
  personas: Persona[] = [
    new Persona('John', 'Wick'),
    new Persona('Jonny', 'Cage')
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService) { }

  agregarPersona(persona: Persona): void {
    this.logginService.enviarMensajeAConsola("Agregando persona: " + persona.nombre);
    this.personas.push(persona);
  }

  findPersona(index: number): Persona {
    let persona: Persona = this.personas[index];
    return persona;
  }

  editPersona(index: number, persona: Persona): void {
    const editPersona = this.personas[index];
    editPersona.nombre = persona.nombre;
    editPersona.apellido = persona.apellido;
  }
}