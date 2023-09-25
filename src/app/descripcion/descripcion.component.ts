// descripcion.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
})
export class DescripcionComponent {
  personaje = {
    nombre: 'Ada Lovelace',
    descripcion: 'Físico teórico alemán, autor de la teoría de la relatividad.',
  };
}

