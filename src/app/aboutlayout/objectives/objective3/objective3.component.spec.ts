import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objective3Component } from './objective3.component';

describe('Objective3Component', () => {
  let component: Objective3Component;
  let fixture: ComponentFixture<Objective3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Objective3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Objective3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
