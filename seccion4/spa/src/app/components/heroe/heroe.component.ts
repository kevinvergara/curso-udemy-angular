import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: any = {};
  constructor( private activateRouteCtrl: ActivatedRoute, private heroesServicioCtrl: HeroesService) {
    this.activateRouteCtrl.params.subscribe(params => {
      this.heroe = this.heroesServicioCtrl.getHeroe(params['id']);
    });
  }

}
