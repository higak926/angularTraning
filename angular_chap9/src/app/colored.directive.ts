import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myColored]'
})
export class ColoredDirective {
//  implements OnInit {
  // constructor(el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = '#cff';
  // }

  // @Input() myBgcolor = '#cff';
  @Input('myColored') color = '#cff';

  constructor(private el: ElementRef) {}

  // ngOnInit(){
  //   this.el.nativeElement.style.backgroundColor = this.color;
  // }

  @HostListener('mouseenter', ['$event.target']) onmouseenter(span: any) {
    console.log(span);
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseleave', ['$event.target']) onmouseleave(span: any) {
    console.log(span);
    this.el.nativeElement.style.backgroundColor = '';
  }

}