import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewLocalsComponent } from './user-view-locals.component';

describe('UserViewLocalsComponent', () => {
  let component: UserViewLocalsComponent;
  let fixture: ComponentFixture<UserViewLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewLocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
