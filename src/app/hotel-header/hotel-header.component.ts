import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-header',
  templateUrl: './hotel-header.component.html',
  styleUrls: ['./hotel-header.component.css']
})
export class HotelHeaderComponent {
  hotelTitle!: string;
}
