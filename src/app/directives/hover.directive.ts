import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @Input() provideColor: string = 'green';

  constructor(private ref: ElementRef, private render: Renderer2) {}

  // ngOnInit(): void {
  //   console.log('Native element', this.ref.nativeElement);
  //   this.render.setStyle(
  //     this.ref.nativeElement,
  //     'backgroundColor',
  //     this.provideColor
  //   );
  // }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(
      this.ref.nativeElement,
      'backgroundColor',
      this.provideColor
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.ref.nativeElement, 'backgroundColor', 'white');
  }
}
