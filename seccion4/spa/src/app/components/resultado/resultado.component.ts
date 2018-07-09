import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {
  heroes: Heroe[] = [];
  busqueda: string;
  constructor( private _heroesService: HeroesService , private rouerCrl: Router , private activateRouteCtrl: ActivatedRoute) {
    this.activateRouteCtrl.params.subscribe(params => {
      this.heroes = this._heroesService.getBuscarHeroes(params['texto']);
      this.busqueda = params['texto'];
    });
  }

  ngOnInit() {
  }
  verHeroe( idx: number ) {
    this.rouerCrl.navigate( ['/heroe', idx] );
  }
}
