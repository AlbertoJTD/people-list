import { Component, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona: Persona; // 'persona' => variable declarada en 'app.component.html'
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  emitirSaludo(): void {
    this.personasService.saludar.emit(this.indice);
  }
}
