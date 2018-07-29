import { Component } from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Kevin';
  nombree = 'Hola ASDFASsdasd wwwwWw';
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'logan',
    clave: 'wvr',
    edad: 500,
    direccion: {
      calle: 'nada',
      dir: 'si'
    }
  };
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego la promesa'), 3500);
  });
  fecha = new Date();
}
