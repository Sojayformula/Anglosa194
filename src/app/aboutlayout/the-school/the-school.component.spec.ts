import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSchoolComponent } from './the-school.component';

describe('TheSchoolComponent', () => {
  let component: TheSchoolComponent;
  let fixture: ComponentFixture<TheSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
