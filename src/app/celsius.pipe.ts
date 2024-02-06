import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
  standalone: true
})
export class CelsiusPipe implements PipeTransform {

  transform(value: number, unit: string) {

    if(value && !isNaN(value)){

           if(unit === 'C'){
             var tempareature = (value - 32) / 1.8 ;
             return tempareature.toFixed(2);
           }
           if(unit === 'F'){
            var tempareature = (value * 32) + 1.8 ;
            return tempareature.toFixed(2);
          }
    }
return;
}

}
