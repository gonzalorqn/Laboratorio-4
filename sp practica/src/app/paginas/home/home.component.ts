import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modales/usuario';
import { ServicioSPService } from "../../servicios/servicio-sp.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Usu: Usuario = { email: "", nombre: "", password: ""};
  altaLocal : boolean = false;
  altaProd : boolean = false;
  tablaProd : boolean = false;

  constructor(
    private regService: ServicioSPService,
  ) { }

  ngOnInit(): void {
    this.Usu.nombre = this.regService.traerToken().name;
  }

}
