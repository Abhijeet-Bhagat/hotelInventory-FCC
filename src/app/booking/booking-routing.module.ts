import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { bookingGuard } from './Guards/booking.guard';

const routes: Routes = [
  { path: ':id', component: BookingComponent , canDeactivate: [bookingGuard]},
  { path: '', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class BookingRoutingModule { }
