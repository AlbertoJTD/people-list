import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'People list';
  personas: Persona[] = [];
  
  // Inyeccion de servicios
  constructor(private logginService: LogginService, private personasService: PersonasService) { }
 
  ngOnInit(): void {
    // Inicializar arreglo de personas
    this.personas = this.personasService.personas;
  }
}
