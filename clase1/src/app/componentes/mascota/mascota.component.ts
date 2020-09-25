import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Output() turno = new EventEmitter<any>();
  @Input() mascota: Mascota;

  constructor() { }

  ngOnInit(): void {
    console.log(this.mascota);
  }

  click()
  {
    console.log("Evento click");
    this.turno.emit("Evento ejecutado en mascota");
  }

}
