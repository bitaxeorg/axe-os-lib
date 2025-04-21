import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxeOsThemeComponent } from './axe-os-theme.component';

describe('AxeOsThemeComponent', () => {
  let component: AxeOsThemeComponent;
  let fixture: ComponentFixture<AxeOsThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxeOsThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxeOsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
