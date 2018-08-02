/*********************seccion2 (typescript)***************/

-tsc app -w **modo observador***solo para un archivo

-tsc -init ***para inicar un proyecto typescript****

-lat para variables locales

-const **constantes**es como let se puede definir dentro de una funcion****

-si igualas variable a string, solo se puede con string despues

-variable tipo :any, puede recibir cualquier valor.

-**** tipo objeto personalizado****
    let spiderman = {
        nombre: "nada"    
    }
-**** despues se puede igualar a un objeto igual ese****

-al poner párametros en una funcion, funcion ( parametro?:string ), este seria
parametro opcional.

-**** funcion con flecha****
*---
let funcion = a => a;

recibe parametro a, y retorna a
*---

*---
let funcion = (a:number, b:number) => a+b;
*---

*---
let funcion = (nombre:string)=>{
    nombre = nombre+"1";
    return nombre;
}
*---

*---
el this no se ve afectado ..por ejemplo con el settimeout por ejemplo ...debido a que con la funcion de flecha no apunta al windows ...a las variables de afuera
*---
-**************************

- let {nombre,poder} = avenger; ..para igualar variables a sub variables de un obejto

-let [nombre,poder] = avenger; ..para igualar variables a sub variables de un arreglo, pero son secuenciales las igualaciones

-*************promesas****************
let prom = new Promise( function ( resolve, reject ) {
   setTimeout( ()=>{
       console.log("promesa terminada");
       //resolve();//todo bien
       reject();//errores
   },1500);
});

prom.then( function () {
    console.log("cuan termina bien");
} , function () {
    console.error("cuando sale mal");
} );
-*************************************

-***interface***
interface Xmen {
    nombre:string,
    poder:string
}
-*************

-el this. hace refencia a la clase en la que se desarrolla

- recordar hacer el index para exportar las clases ..es util, antipaja

-***decorador****
@funcion...antes del constructor //metadata
-****************

-declarar array string==> hola:string[];


/*****************fin typescript*******************/



/****************inicio angular******************/
-componentes: partes de la pagina, como menu, footer, header...en angular va cambiando.

- directivas estructurales: *ngif = true, va a ocultar o mostrar informacion en angular, *ngFor...foreach.

-*****pasos para crear entorno local***
1.- instalar el cli
2.- crar carpeta
3.- ng new my-app
4.- ng serve -p 4000 -o
-*************************************

-******crear componentes consola********
- ng g c components/footer
-**************************************

- *ngFor --> *ngFor="let personaje of personajes", en li, no el group

- para subir a repos, se borra la carpeta de los modulos, pesa mucho, para recuperarla, se tira el comando.. npm install

- para bootstrap npm install bootstrap --save ....el jquery y el popper.sj...y configurar el angular.json

-****boostrap****            
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.js"
]
-****************

-****routes*****
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' } ---cualquier otro path te redirije a otra wea
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
--------------agregar al appcomponent ...
-----
[routerLink]="['home']" ...asi se llama a la ruta...es un arreglo secuencial.

- para ruta con parametros una funcion en .ts

verHeroe( idx: number ) {
    this.rouerCrl.navigate( ['/heroe', idx] );
}

o

<a [routerLink]="['/heroes']" class="btn btn-outline-success btn-block" >Regresar</a>

-se recive, ActivatedRoute, 
-----

-***************


-******servicios*******
- aca va el acceso a la data, y van los setter and getters
-**********************

-********pipes*********
-  funciones para usar, sin importar ni nada, estan en la pagina de angular, por ejemplo el de la fecha, o cambiar a MAY, se usan {{ nombre | uppercase }}


 ---lista pipes utiles---
    -{{ fecha_ | date:"dd/mm/yy" }}
    -{{ nombre | uppercase }}
    -{{ nombre | lowercase }}
    -{{ nombre | slice:0:3 }}
    -{{ pi | number:'1.0-2' }} --> 3.14
    -{{ a | percent:'2.2-2' }} ---> 23.40%
    -{{ salario | currency:'EUR':true:'4.0-0' }}
    -{{ heroe | json }}
    -{{ valorPromesa | async}}
    -{{ fecha | date:'MMMM - dd'}}
crear pipe

-- ng g p no0mbrepipe  -- 

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UpperLow'
})
export class  UpperLow implements PipeTransform {
  transform (value: string): string {
    value = value.toLowerCase();
    return value;
  }
}

appcomponent
import { UpperLow } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpperLow
  ],


-**********************

-********parametros para llamar componentes (ejemplo card)*****
@Input() index: number; .......... para recibir el parametro de afuera
<app-heroe-tarjeta [heroe]="heroe" [index]="i" *ngFor="let heroe of heroes; let i = index;"></app-heroe-tarjeta> ........... asi se envia

-***************************************************************

*********+peticiones http******+
1. -importar la app.modules ... import { HttpClientModule } from '@angular/common/http';
2.- imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
]

3.- para usarlo, insertar en constructor private http: HttpClient

4.- this.http.get("url", {parametro_post} ).subscribe( (respuesta: any) => {
    //en paises queda la info
} );

5.- con post

6.- pipe que sirve para filtrar la informacion que se envia----------
    import { map } from 'rxjs/operators';
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));---version simplificada...del return

*******************************

-************ ngStyle **********
1.- <p [ngStyle]="{'font-size': tamano + 'px'}">
2.- [style.fontSize.px] = "tamano"
3.- el css que esta en la carpeta de ese componente, solo se applica a ese com.
4.- <i class="fa" [ngClass]="{ 'fa-save': !loading, 'fa-check fa-spin': loading }"></i> ----boton cargando
5.- investigar @hostListener('mouseenter') mouseentra(){accion}
*******************************

************ngClass*************
<button (click)="ejecutar()"
        class="btn btn-primary"
        type="button"
        [disabled]="loading">
  <i class="fa" [ngClass]="{ 'fa-save': !loading, 'fa-check fa-spin': loading }"></i>
  Ejecutar
</button>
********************************


*************** ngSwitch**************
<div [ngSwitch] = "alerta">
  <div *ngSwitchCase="'success'"><div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div></div>
  <div *ngSwitchDefault>output2</div>
</div>

<button type="button" (click)="alerta = 'danger'" class="btn btn-success">cambiar</button>
**************************************

/******************fin angular*********************/

