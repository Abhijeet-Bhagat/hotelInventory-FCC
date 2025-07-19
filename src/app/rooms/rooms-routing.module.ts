import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { roomGuard } from './guards/room.guard';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  { path: 'add', component: RoomAddComponent, canActivateChild: [roomGuard] },
  { path: '', component: RoomsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
