import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AxeOsThemeComponent, AppLayoutComponent } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [AxeOsThemeComponent, AppLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
