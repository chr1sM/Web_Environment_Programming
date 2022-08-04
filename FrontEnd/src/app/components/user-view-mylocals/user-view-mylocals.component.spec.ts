import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewMylocalsComponent } from './user-view-mylocals.component';

describe('UserViewMylocalsComponent', () => {
  let component: UserViewMylocalsComponent;
  let fixture: ComponentFixture<UserViewMylocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewMylocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewMylocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
