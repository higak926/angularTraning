import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grep',
  pure: false
})
export class GrepPipe implements PipeTransform {
  transform(value: any[], callback: (time: any) => boolean) {
    if(!Array.isArray(value)) {
      return value;
    }

    return value.filter(callback);
  }
}