import { Directive, HostBinding, booleanAttribute, input } from '@angular/core';

import { ButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[button-light], button[button-light-bold], button[button-light-light]',
  standalone: true,
})
export class ButtonLightDirective extends ButtonBaseDirective {
  buttonBold = input<boolean, string>(false, {
    alias: 'button-light-bold',
    transform: booleanAttribute,
  });

  buttonLight = input<boolean, string>(false, {
    alias: 'button-light-light',
    transform: booleanAttribute,
  });

  button = input<boolean, string>(false, {
    alias: 'button-light',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get lightClasses(): Record<string, boolean> {
    return {
      'button-light': this.button() && !(this.buttonBold() || this.buttonLight()),
      'button-light-light': this.buttonLight() && !(this.buttonBold() || this.button()),
      'button-light-bold': this.buttonBold() && !(this.buttonLight() || this.button()),
    };
  }
  
  constructor() {
    super();
   }

}
