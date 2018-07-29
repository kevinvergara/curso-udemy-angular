import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UpperLow'
})
export class  UpperLow implements PipeTransform {
  transform (value: string): string {
    value = value.toLowerCase();
    return value;
  }
}
