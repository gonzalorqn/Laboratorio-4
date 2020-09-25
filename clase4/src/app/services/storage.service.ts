import { Injectable } from '@angular/core';
import { Persona } from '../clases/persona'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private key = "personas";

  public listado: Array<Persona> = [];

  constructor() { }

  public guardarPersona(persona: Persona): boolean
  {
    //let lista = this.traerPersonas();

    this.listado.push(persona);

    localStorage.setItem(this.key,JSON.stringify(this.listado));

    return true;
  }

  public traerPersonas(): Array<Persona>
  {
    try
    {
      let personas = localStorage.getItem(this.key);

      if(!personas)
      {
        return [];
      }
      
      let listaPersonas = JSON.parse(personas);
      this.listado = listaPersonas;
      return listaPersonas;
    }
    catch(error)
    {
      return [];
    }
  }
}
