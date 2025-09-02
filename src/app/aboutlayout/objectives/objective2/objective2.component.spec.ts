import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objective2Component } from './objective2.component';

describe('Objective2Component', () => {
  let component: Objective2Component;
  let fixture: ComponentFixture<Objective2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Objective2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Objective2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
