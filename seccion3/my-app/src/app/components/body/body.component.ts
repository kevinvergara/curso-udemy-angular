import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  // variables
  frase: any = {
    mensaje: 'gran poder gran responsabilidad',
    autor: 'ben parker'
  };
  aparece = true;

  personajes: string[] = ['spiderman', 'hulk', 'batman'];
  // fin variables

  mostrar() {
    if (this.aparece) {
      this.aparece = false;
    } else {
      this.aparece = true;
    }
  }
}
