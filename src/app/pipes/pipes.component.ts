import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{

  today: Date = new Date();
  rawDate: Date = new Date();
  formatted!: string;
  constructor (private datePipe: DatePipe){}

  ngOnInit(): void {
   this.formatted = this.datePipe.transform(this.rawDate, 'fullDate') || 'n/a';
    console.log('Formatted date:', this.formatted); 
  }

  
}
