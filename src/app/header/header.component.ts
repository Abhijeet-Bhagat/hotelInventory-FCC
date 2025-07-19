import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
onEnter(event: any) {
  alert("You typed: " + event.target.value)
}
  counter: number = 0;
  input: String = ''
incrCounter() {
  this.counter++;
}
decrCounter(){
  if(this.counter > 0)
    this.counter--;
  else
    alert("Counter is 0");
}

onInput(event: any){
  this.input = event.target.value;
}

}
