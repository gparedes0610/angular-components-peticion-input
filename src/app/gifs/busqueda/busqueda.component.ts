import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar! :ElementRef<HTMLInputElement>

//injectar el servicio
constructor(private gifsService:GifsService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor)
    if(valor.trim().length === 0){
      alert('no puede ingresar  valores vacios')
      return;
    }
    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value=''
  }


}
