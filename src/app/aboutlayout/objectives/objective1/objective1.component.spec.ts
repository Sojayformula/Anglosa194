import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objective1Component } from './objective1.component';

describe('Objective1Component', () => {
  let component: Objective1Component;
  let fixture: ComponentFixture<Objective1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Objective1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Objective1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
