import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  
  user = {
    name : '',
    email : '',
    gender : ''

  }

  onSubmit(myform : NgForm){
    console.log( 'printing form details');
    console.table(myform.value)
    alert('Form submitted!!')
  }
}
