import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-app-top-bar',
  imports: [RouterModule],
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.scss'
})
export class AppTopBarComponent {
  constructor(private layoutService: LayoutService){

  }

  public toggleSidebar($event: Event){
    $event.stopImmediatePropagation();
    this.layoutService.onMenuToggle();
  }
}
