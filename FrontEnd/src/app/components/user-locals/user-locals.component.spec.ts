import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocalsComponent } from './user-locals.component';

describe('UserLocalsComponent', () => {
  let component: UserLocalsComponent;
  let fixture: ComponentFixture<UserLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
