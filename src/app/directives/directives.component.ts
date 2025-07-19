import { Component } from '@angular/core';
import { Students } from 'src/assets/Students';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  students = [
    new Students("Abhi", 10, 0o1),
    new Students("Bbhi", 10, 0o1),
    new Students("Cbhi", 10, 0o1),
    new Students("Dbhi", 10, 0o1),
    new Students("Fbhi", 10, 0o1),
    new Students("Vbhi", 10, 0o1),
    new Students("Gbhi", 10, 0o1),
  ]
hasError: boolean = false;

mystyle = {
  'color': 'green',
  'background-color': 'yellow'
}

}
