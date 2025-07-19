import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  constructor(private router: ActivatedRoute){}

  // id$ = this.router.params.pipe(map(params=> params['id']));
   id$ = this.router.paramMap.pipe(map(param => param.get('id')));

  ngOnInit(): void {
    this.router.params.subscribe(params => console.log(params)); //subscribing is not a very good way we will use operators like pipe

  }

  
}
