import { GifsService } from './../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  get historialDeSiderBar(){
    return this.gifsService.historial
  }
  
  buscar(item:string){
    this.gifsService.buscarGifs(item)
  }

}
