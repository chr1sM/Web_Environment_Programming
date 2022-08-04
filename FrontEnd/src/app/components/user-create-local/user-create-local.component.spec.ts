import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateLocalComponent } from './user-create-local.component';

describe('UserCreateLocalComponent', () => {
  let component: UserCreateLocalComponent;
  let fixture: ComponentFixture<UserCreateLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
