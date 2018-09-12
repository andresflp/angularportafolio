import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //esto es una propiedad
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
