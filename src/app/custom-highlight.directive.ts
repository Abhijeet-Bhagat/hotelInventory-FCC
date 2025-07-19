import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {

  @Input() appCustomHighlight = 'yellow'

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight(this.appCustomHighlight);
  }
  @HostListener('mouseleave') onmouseleave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
