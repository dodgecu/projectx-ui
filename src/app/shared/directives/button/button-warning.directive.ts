import { Directive, input, booleanAttribute, HostBinding } from '@angular/core';

import { ButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[button-warning], button[button-warning-bold], button[button-warning-light]',
  standalone: true,
})
export class ButtonWarningDirective extends ButtonBaseDirective {
  buttonBold = input<boolean, string>(false, {
    alias: 'button-warning-bold',
    transform: booleanAttribute,
  });

  buttonLight = input<boolean, string>(false, {
    alias: 'button-warning-light',
    transform: booleanAttribute,
  });

  button = input<boolean, string>(false, {
    alias: 'button-warning',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get primaryClasses(): Record<string, boolean> {
    return {
      'button-warning': this.button() && !(this.buttonBold() || this.buttonLight()),
      'button-warning-light': this.buttonLight() && !(this.buttonBold() || this.button()),
      'button-warning-bold': this.buttonBold() && !(this.buttonLight() || this.button()),
    };
  }
  
  constructor() { 
    super();
  }

}
