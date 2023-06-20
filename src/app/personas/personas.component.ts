import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];
  
  // Inyeccion de servicios
  constructor(private personasService: PersonasService, private router: Router) { }
 
  ngOnInit(): void {
    // Inicializar arreglo de personas
    this.personasService.getPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(personas);
    });
  }

  add(): void {
    this.router.navigate(['personas/agregar']);
  }
}
