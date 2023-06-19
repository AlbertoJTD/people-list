import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];
  
  // Inyeccion de servicios
  constructor(private logginService: LogginService, private personasService: PersonasService) { }
 
  ngOnInit(): void {
    // Inicializar arreglo de personas
    this.personas = this.personasService.personas;
  }
}
