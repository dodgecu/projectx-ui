import { Directive, HostBinding, booleanAttribute, input } from '@angular/core';

import { ButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[button-success], button[button-success-bold], button[button-success-light]',
  standalone: true,
})
export class ButtonSuccessDirective extends ButtonBaseDirective {
  buttonBold = input<boolean, string>(false, {
    alias: 'button-success-bold',
    transform: booleanAttribute,
  });

  buttonLight = input<boolean, string>(false, {
    alias: 'button-success-light',
    transform: booleanAttribute,
  });

  button = input<boolean, string>(false, {
    alias: 'button-success',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get primaryClasses(): Record<string, boolean> {
    return {
      'button-success': this.button() && !(this.buttonBold() || this.buttonLight()),
      'button-success-light': this.buttonLight() && !(this.buttonBold() || this.button()),
      'button-success-bold': this.buttonBold() && !(this.buttonLight() || this.button()),
    };
  }

  constructor() {
    super();
  }
}
