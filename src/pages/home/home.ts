import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public actionSheetCtrl:ActionSheetController) {
  }

  mostrarListadeAcciones(){
    let listadeacciones=this.actionSheetCtrl.create({
      title:'Lista de Acciones',
      buttons:[
        {
          text:'Opción 1',
          handler:()=>{console.log('Opcion 1');}
        },
        {
          text:'Opción 2',
          role:'destructive',
          handler:()=>{console.log('Opcion 2');}
        },
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{console.log('Cancelar');}
        }
      ]
    });
   listadeacciones.present();
  }

}
