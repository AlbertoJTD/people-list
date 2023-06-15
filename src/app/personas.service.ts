import { Persona } from "./persona.model";

export class PersonasService {
  personas: Persona[] = [
    new Persona('John', 'Wick'),
    new Persona('Jonny', 'Cage')
  ];

  agregarPersona(persona: Persona): void {
    this.personas.push(persona);
  }
}