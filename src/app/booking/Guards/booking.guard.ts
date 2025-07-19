import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
  const snackbar = inject(MatSnackBar);

  if(component.bookingForm.pristine){
    return true;
  }
  snackbar.open('You have unsaved changes!', 'DISCARD', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  });
  return false;

  //how to add a constructor with dependency in this function
  // return component.bookingForm.pristine;
};
