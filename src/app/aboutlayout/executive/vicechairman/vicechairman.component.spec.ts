import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicechairmanComponent } from './vicechairman.component';

describe('VicechairmanComponent', () => {
  let component: VicechairmanComponent;
  let fixture: ComponentFixture<VicechairmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VicechairmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VicechairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
