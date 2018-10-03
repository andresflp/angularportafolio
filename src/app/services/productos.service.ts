import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //variable para saber si esta cargando
  cargando = true;
  //creamos una variable para guardar el arreglo de productos
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos ();
  }



  private cargarProductos() {
    this.http.get('https://angular-portafolio-e1804.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {
      console.log (resp);
      //ya esta cargada eso quiere decir que ya esta cargado la info
      this.cargando = false;
      
      this.productos = resp;

    });

  }
}
