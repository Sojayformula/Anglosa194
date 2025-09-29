import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubmissionComponent } from './usersubmission.component';

describe('UsersubmissionComponent', () => {
  let component: UsersubmissionComponent;
  let fixture: ComponentFixture<UsersubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
