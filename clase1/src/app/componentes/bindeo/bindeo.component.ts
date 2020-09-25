import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';

@Component({
  selector: 'app-bindeo',
  templateUrl: './bindeo.component.html',
  styleUrls: ['./bindeo.component.css']
})
export class BindeoComponent implements OnInit {

  nombre: string;
  srcGatito: string;
  lista: Array<Mascota> = [];
  constructor() { }

  ngOnInit(): void {
    this.nombre = "Ingrese el nombre";
    this.srcGatito = "https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75";
  }

  public enviar(event):void
  {
    //this.nombre="Juan";
    //console.log(this.nombre);
    this.lista.push(new Mascota(this.nombre,this.srcGatito,'Gato'));
  }

  public sacarTurno(e)
  {
    console.log(e);
  }

}
