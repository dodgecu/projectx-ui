import { Directive, HostBinding, booleanAttribute, input } from '@angular/core';

@Directive({
  selector: `button[button-large], button[button-medium], button[button-small],
             button[button-square], button[button-rounded], button[button-pill],
             button[button-shadow-small], button[button-shadow-medium], button[button-shadow-large]`,
  standalone: true,
})
export class ButtonBaseDirective {
  buttonLarge = input<boolean, string>(false, {
    alias: 'button-large',
    transform: booleanAttribute,
  });

  buttonMedium = input<boolean, string>(false, {
    alias: 'button-medium',
    transform: booleanAttribute,
  });

  buttonSmall = input<boolean, string>(false, {
    alias: 'button-small',
    transform: booleanAttribute,
  });

  buttonSquare = input<boolean, string>(false, {
    alias: 'button-square',
    transform: booleanAttribute,
  });

  buttonRounded = input<boolean, string>(false, {
    alias: 'button-rounded',
    transform: booleanAttribute,
  });

  buttonPill = input<boolean, string>(false, {
    alias: 'button-pill',
    transform: booleanAttribute,
  });

  buttonShadowSmall = input<boolean, string>(false, {
    alias: 'button-shadow-small',
    transform: booleanAttribute,
  });

  buttonShadowMedium = input<boolean, string>(false, {
    alias: 'button-shadow-medium',
    transform: booleanAttribute,
  });

  buttonShadowLarge = input<boolean, string>(false, {
    alias: 'button-shadow-large',
    transform: booleanAttribute,
  });

  @HostBinding('class')
  get baseClasses(): Record<string, boolean> {
    return {
      'button-base': true,
      'button-large': this.buttonLarge() && !(this.buttonSmall() || this.buttonMedium()),
      'button-small': this.buttonSmall() && !(this.buttonLarge() || this.buttonMedium()),
      'button-medium': this.buttonMedium() && !(this.buttonLarge() || this.buttonSmall()),
      'button-square': this.buttonSquare() && !(this.buttonRounded() || this.buttonPill()),
      'button-rounded': this.buttonRounded() && !(this.buttonSquare() || this.buttonPill()),
      'button-pill': this.buttonPill() && !(this.buttonSquare() || this.buttonRounded()),
      'button-shadow-small': this.buttonShadowSmall() && !(this.buttonShadowLarge() || this.buttonShadowMedium()),
      'button-shadow-medium': this.buttonShadowMedium() && !(this.buttonShadowLarge() || this.buttonShadowSmall()),
      'button-shadow-large': this.buttonShadowLarge() && !(this.buttonShadowMedium() || this.buttonShadowSmall()),
    };
  }

  constructor() {}
}
