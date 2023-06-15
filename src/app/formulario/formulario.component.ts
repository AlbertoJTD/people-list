import { Component, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // nombreInput: string = '';
  // apellidoInput: string = '';

  @ViewChild('nombreRef') nombre: ElementRef;
  @ViewChild('apellidoRef') apellido: ElementRef;
  
  // Injection of services
  constructor(private logginService: LogginService, private personasService: PersonasService) { }

  addPerson(): void {
    let newPerson = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.personasService.agregarPersona(newPerson);
  }
}
