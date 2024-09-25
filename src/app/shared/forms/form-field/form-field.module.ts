import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldComponent } from './form-field.component';
import { InputDirective } from './directives/input.directive';
import { LabelDirective } from './directives/label.directive';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { InputSuffixDirective } from './directives/input-suffix.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormFieldComponent,
    InputDirective,
    LabelDirective,
    FormFieldErrorComponent,
    InputSuffixDirective,
  ],
  exports: [FormFieldComponent, InputDirective, LabelDirective, FormFieldErrorComponent, InputSuffixDirective],
})
export class FormFieldModule {}
