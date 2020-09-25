import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo == "comestible"){
      var str = tipo.replace('comestible', '<span style="color: red">comestible</span>');
    }
    else if(tipo == "bebible"){
      var str = tipo.replace('/bebible/g', '<span style="color: blue">*</span>');
    }
    else if(tipo == "limpieza"){
      var str = tipo.replace('/limpieza', '<span style="color: green">*</span>');
    }
    return str;
  }

}
