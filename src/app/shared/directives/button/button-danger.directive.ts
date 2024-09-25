import { Directive, HostBinding, booleanAttribute, input } from '@angular/core';

import { ButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[button-danger], button[button-danger-bold], button[button-danger-light]',
  standalone: true,
})
export class ButtonDangerDirective extends ButtonBaseDirective {
  buttonBold = input<boolean, string>(false, {
    alias: 'button-danger-bold',
    transform: booleanAttribute,
  });

  buttonLight = input<boolean, string>(false, {
    alias: 'button-danger-light',
    transform: booleanAttribute,
  });

  button = input<boolean, string>(false, {
    alias: 'button-danger',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get primaryClasses(): Record<string, boolean> {
    return {
      'button-danger': this.button() && !(this.buttonBold() || this.buttonLight()),
      'button-danger-light': this.buttonLight() && !(this.buttonBold() || this.button()),
      'button-danger-bold': this.buttonBold() && !(this.buttonLight() || this.button()),
    };
  }

  constructor() {
    super();
  }
}
