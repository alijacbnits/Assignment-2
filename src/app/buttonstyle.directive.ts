import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonstyle]',
})
export class ButtonstyleDirective {
  constructor(private el: ElementRef) {}
  ngOnInit() {}

  //for onclick function
  @HostListener('click', ['$event'])
  clickEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.el.nativeElement.style.marginLeft = '45%';
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.innerText = 'Cancel';
  }
}
