import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
name: any;
// temp: number;
// convertedTemp: number;
temp: any = 0;
convertedTemp = this.temp * 9 / 5 + 32;

}
