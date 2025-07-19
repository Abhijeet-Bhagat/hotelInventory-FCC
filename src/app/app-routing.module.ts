// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

// Define your routes here
const routes: Routes = [
  // Example:
  {
    path: 'form',
    component: TemplateDrivenComponent,
    // canActivate: [loginGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
    // canActivate: [loginGuard],
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    // canActivate: [loginGuard],
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
