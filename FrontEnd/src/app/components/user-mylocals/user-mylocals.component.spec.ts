import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMylocalsComponent } from './user-mylocals.component';

describe('UserMylocalsComponent', () => {
  let component: UserMylocalsComponent;
  let fixture: ComponentFixture<UserMylocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMylocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMylocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
