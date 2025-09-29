import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteachersComponent } from './adminteachers.component';

describe('AdminteachersComponent', () => {
  let component: AdminteachersComponent;
  let fixture: ComponentFixture<AdminteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminteachersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
