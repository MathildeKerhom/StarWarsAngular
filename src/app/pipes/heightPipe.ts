import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {
  transform(value: string): string {
    let size = Number.parseInt(value)/100;
    return size.toString();
  }
}