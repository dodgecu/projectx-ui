import { AfterContentInit, Component, OnDestroy, contentChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, map, takeUntil } from 'rxjs';

import { InputDirective } from './directives/input.directive';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  host: {
    '[class.field-invalid]': '!controlValid()',
  },
})
export class FormFieldComponent implements AfterContentInit, OnDestroy {
  controlValid = signal<boolean>(true);

  private _input = contentChild(InputDirective);

  shouldShowError$!: Observable<boolean | null> | undefined;

  private _destroy$ = new Subject<void>();
  constructor() {}

  ngAfterContentInit(): void {
    this._input()
      ?.сontrol.statusChanges?.pipe(map(() => this._input()?.сontrol.invalid))
      .pipe(takeUntil(this._destroy$))
      .subscribe((valid) => this.controlValid.set(!valid));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
