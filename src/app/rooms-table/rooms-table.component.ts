import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Room } from '../rooms/rooms.component';
import { FilterPipe } from '../booking/PriceFilterPipe/filter.pipe';
@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.css']
})
export class RoomsTableComponent implements OnChanges, DoCheck {

  @Input() price: number = 0;
  
  ngDoCheck(): void {
    console.log('DoCheck lifecycle hook called in RoomsTableComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected in RoomsTableComponent:', changes);
  }

  @Input() rooms: Room[]= []; //this will receive the rooms data from the parent component and will be a property of the html tag of this component
  @Input() roomsAvailable: number = 0;

  @Output() roomsSelected = new EventEmitter<Room[]>();
  @Output() deleteRoomEvent = new EventEmitter<Room>();

  bookRoom(roomId: string) {
    this.roomsSelected.emit(roomId ? this.rooms.filter(room => room.roomNumber = roomId) : []);
  }

  deleteRoom(room: Room){
    this.deleteRoomEvent.emit(room);
  }


}
