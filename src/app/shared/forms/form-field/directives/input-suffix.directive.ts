import { Directive } from '@angular/core';

@Directive({
  selector: '[appInputSuffix]',
  standalone: true,
  host: {
    class: 'input-suffix',
  },
})
export class InputSuffixDirective {
  constructor() {}
}
