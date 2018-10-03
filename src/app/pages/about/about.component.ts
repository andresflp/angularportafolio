import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //inyectamos el servicio
  

  constructor(public _infoService: InfoPaginaService,
              public _infoProductos: ProductosService ) { 

  }

  ngOnInit() {
  }

}
