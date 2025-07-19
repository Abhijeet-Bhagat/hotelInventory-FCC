import { Component, ViewChild } from '@angular/core';
import { mergeAll } from 'rxjs';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent {
  taskmsg = ''
  @ViewChild(ChildCompComponent) childC!: ChildCompComponent;
  stop() {
    this.childC.stopTimer();
  }
  start() {
    this.childC.startTimer();
  }
  parentdone(message: string) {
    this.taskmsg = message;
    alert("Message Recieved: " + message);
  }

}
