import { Component, Renderer2, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { LayoutService } from '../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-app-layout',
  imports: [CommonModule],
  providers: [LayoutService],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  standalone: true
})
export class AppLayoutComponent {

  private menuOutsideClickListener: any;
  private profileMenuOutsideClickListener: any;

  constructor(public layoutService: LayoutService, public router: Router) {


      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => {
              this.hideMenu();
              this.hideProfileMenu();
          });
  }

  hideMenu() {
      this.layoutService.state.overlayMenuActive = false;
      this.layoutService.state.staticMenuMobileActive = false;
      this.layoutService.state.menuHoverActive = false;
      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
          this.menuOutsideClickListener = null;
      }
      this.unblockBodyScroll();
  }

  hideProfileMenu() {
      this.layoutService.state.profileSidebarVisible = false;
      if (this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener();
          this.profileMenuOutsideClickListener = null;
      }
  }

  blockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.add('blocked-scroll');
      }
      else {
          document.body.className += ' blocked-scroll';
      }
  }

  unblockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.remove('blocked-scroll');
      }
      else {
          document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
              'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
  }

  get containerClass() {
      return {
          'layout-theme-light': this.layoutService.config().colorScheme === 'light',
          'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
          'layout-overlay': this.layoutService.config().menuMode === 'overlay',
          'layout-static': this.layoutService.config().menuMode === 'static',
          'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
          'layout-overlay-active': this.layoutService.state.overlayMenuActive,
          'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
          'p-input-filled': this.layoutService.config().inputStyle === 'filled',
          'p-ripple-disabled': !this.layoutService.config().ripple
      }
  }

  get isAPMode(): boolean {
      return this.router.url.startsWith('/ap');
  }

  ngOnDestroy() {

      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
      }
  }
}
