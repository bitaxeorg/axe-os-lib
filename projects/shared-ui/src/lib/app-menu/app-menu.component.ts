import { Component, Input, OnInit } from '@angular/core';
import { AppMenuItemComponent } from '../app-menu-item/app-menu-item.component';
import {Button} from 'primeng/button'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-app-menu',
  imports: [CommonModule, AppMenuItemComponent, Button],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent implements OnInit {

  @Input() model: any[] = [];

  constructor(
  ) { }

  ngOnInit() {
      
  }


}
