import { SearchGifsResponse ,Gif} from './../interface/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = `XFZQewmhYu9901B6OOWoFdbLhRz6a8fX`;
  private servicioUrl:string ='https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  //TODO cambiar any x su tipo que corresponde
  public resultados: Gif[] =[]

  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  async buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase()
    console.log('entraste a buscarGifs =>',query)
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      this._historial = this._historial.splice(0, 5)

      localStorage.setItem('historial',JSON.stringify(this._historial))

    }
    console.log(this._historial)

    const params = new HttpParams()
    .set('apiKey',this.apiKey)
    .set('limit',10)
    .set('q',query);

    console.log(params.toString())

    this.http.get<SearchGifsResponse>(
      `${this.servicioUrl}/search`, {params})
      .subscribe( (resp) => {
      console.log(resp.data)
      this.resultados = resp.data
      localStorage.setItem('resultados',JSON.stringify(this.resultados))
    })

    
  }
}
