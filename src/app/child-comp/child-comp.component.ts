import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {

  @Input() name! : String

  @Output() taskCompleted = new EventEmitter<string>();
  message: string = 'Timer is in Idle state';

  onTaskComplete(){
    this.taskCompleted.emit("Child has completed task 1");
  }

  startTimer(){
    this.message="Timer started";
  }
  stopTimer(){
    this.message = "Timer stopped";
  }
}
