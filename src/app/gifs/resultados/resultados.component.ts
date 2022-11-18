import { GifsService } from './../services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifService.resultados
  }

constructor(private gifService:GifsService){}


}
