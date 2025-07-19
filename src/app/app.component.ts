import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  constructor(@Inject(LocalStorageToken) private LocalStorage: any) {
    console.log('AppComponent constructor called');
  }
  ngOnInit(): void {
    this.LocalStorage.setItem('name', 'Abhijeet')
    console.log('AppComponent initialized');
  }
}
