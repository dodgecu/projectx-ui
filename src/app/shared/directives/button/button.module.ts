import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonPrimaryDirective } from './button-primary.directive';
import { ButtonDangerDirective } from './button-danger.directive';
import { ButtonSuccessDirective } from './button-success.directive';
import { ButtonWarningDirective } from './button-warning.directive';
import { ButtonInfoDirective } from './button-info.directive';
import { ButtonLightDirective } from './button-light.directive';

@NgModule({
  declarations: [],
  imports: [
    ButtonPrimaryDirective,
    ButtonDangerDirective,
    ButtonSuccessDirective,
    ButtonWarningDirective,
    ButtonInfoDirective,
    ButtonLightDirective,
  ],
  exports: [
    ButtonPrimaryDirective,
    ButtonDangerDirective,
    ButtonSuccessDirective,
    ButtonWarningDirective,
    ButtonInfoDirective,
    ButtonLightDirective,
  ],
})
export class ButtonModule {}
