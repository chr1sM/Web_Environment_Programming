import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocalsComponent } from './admin-locals.component';

describe('AdminLocalsComponent', () => {
  let component: AdminLocalsComponent;
  let fixture: ComponentFixture<AdminLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
