import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate'
})
export class DatePipe implements PipeTransform {
  transform(value: string): Date {
    return new Date(value);
  }
}