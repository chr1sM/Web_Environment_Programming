import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLocalsComponent } from './admin-view-locals.component';

describe('AdminViewLocalsComponent', () => {
  let component: AdminViewLocalsComponent;
  let fixture: ComponentFixture<AdminViewLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewLocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
