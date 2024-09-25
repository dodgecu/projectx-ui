import { Directive, HostBinding, booleanAttribute, input } from '@angular/core';

import { ButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[button-primary], button[button-primary-bold], button[button-primary-light]',
  standalone: true,
})
export class ButtonPrimaryDirective extends ButtonBaseDirective {
  buttonBold = input<boolean, string>(false, {
    alias: 'button-primary-bold',
    transform: booleanAttribute,
  });

  buttonLight = input<boolean, string>(false, {
    alias: 'button-primary-light',
    transform: booleanAttribute,
  });

  button = input<boolean, string>(false, {
    alias: 'button-primary',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get primaryClasses(): Record<string, boolean> {
    return {
      'button-primary': this.button() && !(this.buttonBold() || this.buttonLight()),
      'button-primary-light': this.buttonLight() && !(this.buttonBold() || this.button()),
      'button-primary-bold': this.buttonBold() && !(this.buttonLight() || this.button()),
    };
  }

  constructor() {
    super();
  }
}
