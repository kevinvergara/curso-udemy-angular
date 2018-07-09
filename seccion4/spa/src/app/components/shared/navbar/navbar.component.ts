import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private rouerCrl: Router ) { }

  ngOnInit() {
  }
  buscarHeroe( texto: string ) {
    this.rouerCrl.navigate( ['/resultado', texto] );
  }
}
