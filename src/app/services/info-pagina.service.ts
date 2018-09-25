import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
    info: InfoPagina = {};
    cargada = false;

  constructor(private http: HttpClient) {
   // console.log('info de la pagina esta lista');
    //leer el archivo json creado donde esta la info de la pagina
    this.http.get('assets/data/data-pagina.json')
       .subscribe((resp: InfoPagina) => {
          this.cargada = true;
          //guardamos la respuesta en info
          this.info = resp;

          console.log(resp);
       });
    

   }
}
