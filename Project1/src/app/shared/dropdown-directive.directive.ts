import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open')isOpen = false;
  constructor() { }
  @HostListener('click') activeDropdown() {
    this.isOpen = (!this.isOpen);
  }

}
