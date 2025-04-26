import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {AxeOsThemeComponent, AppLayoutComponent, AppMenuComponent, AppTopBarComponent } from 'shared-ui';
import {ButtonModule} from 'primeng/button';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext'
import {InputGroupModule} from 'primeng/inputgroup'

@Component({
  selector: 'app-root',
  imports: [AxeOsThemeComponent, AppLayoutComponent, AppMenuComponent, AppTopBarComponent, RouterModule, ButtonModule, ReactiveFormsModule, InputTextModule, InputGroupModule],
  providers:[FormBuilder],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';

  public form: FormGroup;

  public menuItems = [
      {
          label: 'Menu',
          items: [
              { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
              { label: 'Swarm', icon: 'pi pi-fw pi-share-alt', routerLink: ['swarm'] },
              { label: 'Network', icon: 'pi pi-fw pi-wifi', routerLink: ['network'] },
              { label: 'Pool Settings', icon: 'pi pi-fw pi-server', routerLink: ['pool'] },
              { label: 'Customization', icon: 'pi pi-fw pi-palette', routerLink: ['design'] },
              { label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink: ['settings'] },
              { label: 'Logs', icon: 'pi pi-fw pi-list', routerLink: ['logs'] },
              { label: 'Whitepaper', icon: 'pi pi-fw pi-bitcoin', command: () => window.open('/bitcoin.pdf', '_blank') },
          ]
      }
  ];

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({});
  }

  public add(){
    
  }
}
