import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { HttpService } from '../../services/http.service';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado: Array<any>;

  constructor(private storage: StorageService, private http: HttpService) { }

  ngOnInit(): void {
    //this.listado = this.storage.listado;
    this.http.get().subscribe((data: Array<any>) => {
      console.log(data);
      this.listado = data;
    }, error => {
      console.log(error);
    });
  }

}
