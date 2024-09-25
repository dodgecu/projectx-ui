import { Directive } from '@angular/core';

@Directive({
  selector: '[appLabel]',
  standalone: true,
  host: {
    class: 'label-regular',
  },
})
export class LabelDirective {
  constructor() {}
}
