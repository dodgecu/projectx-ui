import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _document = inject(DOCUMENT);
  constructor() {
    const isSystemDark = this._document.defaultView?.matchMedia(
      '(prefers-color-scheme: dark)'
    )?.matches;
    
    if(isSystemDark) {
      this._document.body.classList.add('dark');
    }
  }

  onToggleTheme(): void {
    if(this._document.body.classList.contains('dark')) {
      this._document.body.classList.remove('dark');
    } else {
      this._document.body.classList.add('dark');
    }
  }
}
