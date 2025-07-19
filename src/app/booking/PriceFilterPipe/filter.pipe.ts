import { Pipe, PipeTransform } from '@angular/core';
import { Room } from 'src/app/rooms/rooms.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(room: Room[], price: number): Room[] {
    return room.filter(room => room.price <= price);
  }

}
