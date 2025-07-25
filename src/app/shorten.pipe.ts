import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number = 10): string {
    if(!value) return '';
    if(value.length > 10 )
      return value.substring(0, limit) + '...';

    return value;
  }

}
