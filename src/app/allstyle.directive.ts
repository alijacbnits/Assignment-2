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
  }

  //for mouseleave function
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.el.nativeElement.style.color="white";
    this.el.nativeElement.style.backgroundColor="blue";
  }

  //for onclick function
  @HostListener('click', ['$event'])
  clickEvent(event:any) {
    event.preventDefault();
    event.stopPropagation();
    this.el.nativeElement.style.marginLeft="45%";
    console.log('Button Clicked!!!');
  }

}
