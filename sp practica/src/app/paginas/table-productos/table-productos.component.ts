import { Component, OnInit } from '@angular/core';
import { ServicioSPService } from "../../servicios/servicio-sp.service"


@Component({
  selector: 'app-table-productos',
  templateUrl: './table-productos.component.html',
  styleUrls: ['./table-productos.component.css']
})
export class TableProductosComponent implements OnInit {

  productos = [];

  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {
    this.regService.obtenerXTodos("productos").subscribe((auxAutos) => {
      auxAutos.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        this.productos.push(prodInfo);
      })
    });
  }

}
