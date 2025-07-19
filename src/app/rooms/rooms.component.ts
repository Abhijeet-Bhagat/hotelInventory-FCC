import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HotelHeaderComponent } from '../hotel-header/hotel-header.component';
import { RoomService } from '../services/room.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  // providers: [RoomService]
})
export class RoomsComponent implements OnInit, AfterViewInit {
  constructor(private datepipe: DatePipe, private roomService: RoomService) {}

  roomsAvailable!: number;
  roomslist!: Room[];

  priceFilter = new FormControl(1000000);

  ngAfterViewInit(): void {
    // This method is called after the view has been initialized
    // You can access the hotelHeader component here if needed
    console.log('Hotel Header Component ngAfterViewInit:', this.hotelHeader);
    this.hotelHeader.hotelTitle = 'Welcome to Hotel RollerPal';
    // this.hotelHeader.hotelTitle = 'Welcome to Our Hotel';
  }

  @ViewChild(HotelHeaderComponent, { static: true })
  hotelHeader!: HotelHeaderComponent;

  ngOnInit(): void {
    // Initialize any data or perform actions when the component is initialized
    console.log('RoomsComponent initialized');

    //calling the service to get the rooms list
    this.roomService.getRooms().subscribe((rooms) => {
      this.roomslist = rooms;
      this.roomsAvailable = rooms.length;
    });
    console.log('In ngoninit', this.hotelHeader);
  }

  // addRoom method to add a new room
  addRoom() {
    const room: Room = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      price: 2000,
      description: 'A spacious room with a beautiful view',
      amenities: 'AC, Coffee table, Mini bar',
      checkinTime: this.datepipe.transform(new Date(), 'dd-MM-yyyy') || 'N/A',
    };

    this.roomService.addRooms(room).subscribe((data) => {
      this.roomslist = data;
      this.roomsAvailable = data.length;
    });
  }

  editRoom() {
    const room: Room = {
      roomNumber: '0ba44e05-d582-466e-898d-d7b1e92cfbb2',
      roomType: 'Super Deluxe Room(E)',
      price: 3000,
      description: 'A luxurious room with a beautiful view',
      amenities: 'AC, Coffee table, Mini bar, Balcony',
      checkinTime: this.datepipe.transform(new Date(), 'dd-MM-yyyy') || 'N/A',
    };

    this.roomService.editRooms(room).subscribe((data) => {
      this.roomslist = data;
      this.roomsAvailable = data.length;
    });
  }

  deleteRoom(room: Room) {
    this.roomService.deleteRooms(room).subscribe((data) => {
      this.roomslist = data;
      this.roomsAvailable = data.length;
      // alert(`Room ${room.roomType} deleted successfully`);
    });
  }

  onRoomSelect(room: Room[]) {
    console.log("Selected Room:', room);");
    if (room.length > 0) {
      alert(
        `You have selected the ${room[0].roomType} with price ${room[0].price}`
      );
    }
  }

  //This is shifted to the service file
  // roomslist: Room[] = [
  //   new Room(1, 'Deluxe Room', 2000, 'A spacious room', 'AC, Coffee table', this.datepipe.transform(new Date(), 'dd-mm-yyyy') || 'N/A' ),
  //   new Room(2, 'Super Deluxe Room', 3000, 'A luxurious room', 'AC, Coffee table, Mini bar', this.datepipe.transform(new Date(), 'dd-mm-yyyy') || 'N/A'),
  //   new Room(3, 'Suite Room', 5000, 'A suite with amazing view', 'AC, Coffee table, Mini bar, Balcony', this.datepipe.transform(new Date(), 'dd-mm-yyyy') || 'N/A'),
  //   new Room(4, 'Presidential Suite', 10000, 'The best room in the hotel', 'AC, Coffee table, Mini bar, Balcony, Private pool', this.datepipe.transform(new Date(), 'dd-mm-yyyy') || 'N/A'),
  //   new Room(5, 'Standard Room', 1500, 'A comfortable room', 'AC, Coffee table', this.datepipe.transform(new Date(), 'dd-mm-yyyy') || 'N/A' )
  // ]
}

//create a class for room with parameters id, name, price, amenities, checkInDate
export class Room {
  constructor(
    public roomType: string,
    public price: number,
    public description: string,
    public amenities: string,
    public checkinTime: string,
    public roomNumber?: string
  ) {}
}
