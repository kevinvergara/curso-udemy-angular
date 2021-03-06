import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private rouerCrl: Router ) {
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit() {
  }
  verHeroe( ) {
    this.heroeSeleccionado.emit( this.index );
  }
}
