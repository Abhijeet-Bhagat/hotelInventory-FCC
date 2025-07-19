import { Injectable } from '@angular/core';
import { Room } from '../rooms/rooms.component';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(
  {
  providedIn: 'root'
}
)
export class RoomService {
    // This service can be used to manage room data, fetch from an API, etc.
    constructor(private datepipe: DatePipe, private http: HttpClient) {
      console.log('RoomService initialized');
     }
  
    headers = new HttpHeaders({'token': 'qwerty1234554321ytrewq'})
    getRooms() {
      return this.http.get<Room[]>('/api/rooms', {headers: this.headers});
    }

    addRooms(room: Room){
      return this.http.post<Room[]>('/api/rooms', room, {headers: this.headers});
    }

    editRooms(room: Room){
      return this.http.put<Room[]>(`/api/rooms/${room.roomNumber}`, room);
    }

    deleteRooms(room : Room){
      return this.http.delete<Room[]>(`/api/rooms/${room.roomNumber}`);
    }
}
