import { Component } from '@angular/core';
import { Room } from '../rooms.component';
import { DatePipe } from '@angular/common';
import { RoomService } from 'src/app/services/room.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css'],
})
export class RoomAddComponent {
  constructor(private datepipe: DatePipe, private service: RoomService) {}
  successMessage: string = '';
  room: Room = {
    roomType: '',
    price: 0,
    description: '',
    amenities: '',
    checkinTime: this.datepipe.transform(new Date(), 'dd-MM-yyyy') || 'N/A',
  };

  addRoom(roomsForm: NgForm) {
    this.service.addRooms(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully!';
      roomsForm.resetForm({
        //reset the data after submission to the values provided
        roomType: '',
        price: 0,
        description: '',
        amenities: '',
        checkinTime: this.datepipe.transform(new Date(), 'dd-MM-yyyy') || 'N/A',
      });
    });
  }
}
