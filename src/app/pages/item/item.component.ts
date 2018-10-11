import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { producto_Descripcion } from '../../interfaces/productoDescripcion.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: producto_Descripcion;
  id: string;
  anio: number = new Date().getFullYear();
  constructor(private route: ActivatedRoute,
              public _productosService: ProductosService, public infoPaginaService: InfoPaginaService) { }

  ngOnInit() {
    this.route.params.
    subscribe(parametros =>{
      //console.log(parametros['id']);
     this._productosService.getProducto(parametros['id']).
     subscribe((producto:producto_Descripcion) => { 
      //guardamos nuestro objeto producto en una variable 
      this.producto = producto;
      this.id = parametros['id'];
      //console.log(producto);
     });

    });
  }

}
