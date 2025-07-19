import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { FormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms.component';
import { HotelHeaderComponent } from '../hotel-header/hotel-header.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsTableModule } from '../rooms-table/rooms-table.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RoomsComponent,
    HotelHeaderComponent,
    BookRoomComponent,
    RoomAddComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    RoomsTableModule,
    RouterModule,
    ReactiveFormsModule
  ],
})
export class RoomsModule {}
