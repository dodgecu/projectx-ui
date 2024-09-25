import { Directive, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInput]',
  standalone: true,
  host: {
    class: 'block peer input-control',
    placeholder: ' ',
  },
})
export class InputDirective {
  сontrol = inject<NgControl>(NgControl, { self: true });

  constructor() {}
}
