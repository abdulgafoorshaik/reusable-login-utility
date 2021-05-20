import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLoginUtilityComponent } from './reusable-login-utility.component';

describe('ReusableLoginUtilityComponent', () => {
  let component: ReusableLoginUtilityComponent;
  let fixture: ComponentFixture<ReusableLoginUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableLoginUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableLoginUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
