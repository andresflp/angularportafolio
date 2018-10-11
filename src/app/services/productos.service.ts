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

  //creamos otra variable para guardar los filtrados por busqueda
  productosFiltado: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos ();
  }



  private cargarProductos() {

    //promesas
    return new Promise( (resolve , reject) => {
      this.http.get('https://angular-portafolio-e1804.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
       // console.log (resp);
        //ya esta cargada eso quiere decir que ya esta cargado la info
        this.cargando = false;
        this.productos = resp;
        resolve();
      });

    });
  }

   getProducto(id: string){
    return this.http.get(`https://angular-portafolio-e1804.firebaseio.com/productos/${id}.json`);
  }

  //metodo buscar
  buscarProducto (termino: string){
    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then( () => {
        //todo este codigo se ejecuta despues de tener los productos cargados
        //filtrar
        this.filtrarProductos(termino);

      });
      
    }
    else{
      //filtrar
     this.filtrarProductos(termino);
    }

  }
  private filtrarProductos(termino: string){
      
      this.productosFiltado = [];
      termino = termino.toLocaleLowerCase();
      console.log(termino);
      this.productos.forEach( prod =>{
        //como el titulo tiene mayusculas
        //tenemos que cambiarlas a minusculas para evaluar
        const tituloLower = prod.titulo.toLocaleLowerCase();

        if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf ( termino ) >= 0 ) {
         this.productosFiltado.push( prod );
      }
    });
  }
}
