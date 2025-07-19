import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextDirective]'
})
export class TextDirectiveDirective {

  @Input() appTextDirective: any = 24;


  constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onmouseenter(){
      this.highlight(this.appTextDirective);
    }
    @HostListener('mouseleave') onmouseleave(){
      this.highlight(12);
    }

    private highlight(size: number){
      this.el.nativeElement.style.fontSize = `${size}px`;
    }
}
