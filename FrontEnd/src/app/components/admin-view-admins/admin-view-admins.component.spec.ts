import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAdminsComponent } from './admin-view-admins.component';

describe('AdminViewAdminsComponent', () => {
  let component: AdminViewAdminsComponent;
  let fixture: ComponentFixture<AdminViewAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
