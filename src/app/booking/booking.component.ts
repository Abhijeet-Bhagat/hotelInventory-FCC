import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/custom-validators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    //setValue vs patchValue : setValue is used to set the value of the form control and
    // we need to provide values for all the form controls
    //patchValue is used to update the value of the form control and
    // we need to provide values for the form controls that we want to update

    this.bookingForm.patchValue({
      roomId: roomId,   
      name: '',    //these are the form controls           
      guestEmail:'',  //Validators.required is used to make the field required
      checkinDate: '',
      checkoutDate:'',
      bookingStatus:'',
      bookingAmount: '',
      bookingDate:'',
      mobileNumber:'',
      address: {
        guestAddress: 'Sarjapura',
        guestCity: '',
        guestState:'',
        guestCountry:'',
        guestZipCode: '',
      },
      guests: [ {
        guestName: 'Abhi',
        guestAge: '25'
      } ]
    });
  
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
  removePassport() {
    this.bookingForm.removeControl('passport');
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }


  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }


  addGuest() {
    this.guests.push(
      this.addGuestControl()
  )
  }

  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.bookingForm = this.fb.group({
      roomId: [''],   
      name: ['',[ Validators.required, CustomValidators.checkName]],    //these are the form controls           
      guestEmail: ['', [Validators.required, Validators.email]],  //Validators.required is used to make the field required
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      address: this.fb.group({
        guestAddress: [''],
        guestCity: ['', Validators.required],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
      }),
      guests: this.fb.array([this.addGuestControl()])
    }, 
    {
      updateOn: 'blur',
      validators: [CustomValidators.dateValidator]
    }
  )
  }


  private addGuestControl(): any {
    return this.fb.group({
      guestName: ['', Validators.required],
      guestAge: ['']
    });
  }
}


// export class BookingDTO {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: []
// }