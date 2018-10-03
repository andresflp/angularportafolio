import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interface';


@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService  {
    info: InfoPagina = {};
    infoEquipo : any [] = [];
    cargada = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();

  }

  //metodo para cargar infopagina
    private cargarInfo() {
      // console.log('info de la pagina esta lista');

      //leer el archivo json creado donde esta la info de la pagina
      this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        //guardamos la respuesta en info
        this.info = resp;

        //console.log(resp);
      });
    }


    //metodo para cargar equipo
    private cargarEquipo() {
      //leer el archivo json de firebase
      this.http.get('https://angular-portafolio-e1804.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.cargada = true;
        //guardamos la respuesta en info
        this. infoEquipo = resp;

        //console.log(resp);
      });
    }

   }

