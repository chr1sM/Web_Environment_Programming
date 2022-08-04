import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditLocalComponent } from './user-edit-local.component';

describe('UserEditLocalComponent', () => {
  let component: UserEditLocalComponent;
  let fixture: ComponentFixture<UserEditLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
