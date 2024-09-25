import { Directive, HostBinding, booleanAttribute, input } from '@angular/core';

import { ButtonBaseDirective } from './button-base.directive';

@Directive({
  selector: 'button[button-info], button[button-info-bold], button[button-info-light]',
  standalone: true,
})
export class ButtonInfoDirective extends ButtonBaseDirective {
  buttonBold = input<boolean, string>(false, {
    alias: 'button-info-bold',
    transform: booleanAttribute,
  });

  buttonLight = input<boolean, string>(false, {
    alias: 'button-info-light',
    transform: booleanAttribute,
  });

  button = input<boolean, string>(false, {
    alias: 'button-info',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get infoClasses(): Record<string, boolean> {
    return {
      'button-info': this.button() && !(this.buttonBold() || this.buttonLight()),
      'button-info-light': this.buttonLight() && !(this.buttonBold() || this.button()),
      'button-info-bold': this.buttonBold() && !(this.buttonLight() || this.button()),
    };
  }

  constructor() { 
    super();
  }

}
