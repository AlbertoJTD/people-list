import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LogginService]
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = '';
  // apellidoInput: string = '';

  @ViewChild('nombreRef') nombre: ElementRef;
  @ViewChild('apellidoRef') apellido: ElementRef;
  
  // Injection of services
  constructor(private logginService: LogginService) { }

  addPerson(): void {
    let newPerson = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.personaCreada.emit(newPerson);
    this.logginService.enviarMensajeAConsola('Hello from Formulario.component')
  }
}
