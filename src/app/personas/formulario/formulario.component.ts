import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;
  editMode: number;
  
  // Injection of services
  constructor(private logginService: LogginService, private personasService: PersonasService, private router: Router, private route: ActivatedRoute) {
    this.personasService.saludar.subscribe((indice: number) => 
      alert(`El indice es: ${indice}`)
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.editMode = +this.route.snapshot.queryParams['editMode']; // convert string type param to number

    if (this.editMode == 1) {
      let persona: Persona = this.personasService.findPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  savePerson(): void {
    let person = new Persona(this.nombreInput, this.apellidoInput);
    
    if (this.editMode == 1) {
      // let persona: Persona = this.personasService.findPerson(this.index);
      this.personasService.editPersona(this.index, person);
    } else {
      this.personasService.addPersona(person);
    }

    this.router.navigate(['personas']); // regresar a la ruta 'personas'
  }

  delete(index: number): void {
    if (this.editMode == 1) {
      this.personasService.deletePersona(index);
    }

    this.router.navigate(['personas']);
  }
}
