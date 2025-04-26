import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from '../services/layout.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: '[lib-app-menu-item]',
  imports: [CommonModule, RouterModule],
  providers:[Router],
  templateUrl: './app-menu-item.component.html',
  styleUrl: './app-menu-item.component.scss',
  animations: [
    trigger('children', [
      state('void', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('void <=> *', animate('200ms ease-in-out')),
    ]),
  ]
})
export class AppMenuItemComponent implements OnInit {

  @Input() item: any;
  @Input() index!: number;
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  @Input() parentKey!: string;

  active = false;

  key: string = "";

  constructor(public layoutService: LayoutService, public router: Router) {
  }

  ngOnInit() {
      this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);

  }


  itemClick(event: Event) {
      // avoid processing disabled items
      if (this.item.disabled) {
          event.preventDefault();
          return;
      }

      // execute command
      if (this.item.command) {
          this.item.command({ originalEvent: event, item: this.item });
      }

      // toggle active state
      if (this.item.items) {
          this.active = !this.active;
      }

  }

  get submenuAnimation() {
      return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
  }

  @HostBinding('class.active-menuitem') 
  get activeClass() {
      return this.active && !this.root;
  }


}
