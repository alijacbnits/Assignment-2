import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllstyle]'
})
export class AllstyleDirective {

  constructor(private el: ElementRef) { }
  ngOnInit() {

  }

  //for mouseover function
  @HostListener('mouseover') mouseover(eventData:Event) {
    this.el.nativeElement.style.color="red";
    this.el.nativeElement.style.backgroundColor="pink";
    this.el.nativeElement.style.fontSize="25px";
  }

  //for mouseleave function
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.el.nativeElement.style.color="white";
    this.el.nativeElement.style.backgroundColor="blue";
    this.el.nativeElement.style.fontSize="16px";
  }
}
