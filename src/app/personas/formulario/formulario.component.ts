import { Component } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginService.service';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput: string = '';
  apellidoInput: string = '';
  
  // Injection of services
  constructor(private logginService: LogginService, private personasService: PersonasService) {
    this.personasService.saludar.subscribe((indice: number) => 
      alert(`El indice es: ${indice}`)
    );
  }

  addPerson(): void {
    let newPerson = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(newPerson);
  }
}
