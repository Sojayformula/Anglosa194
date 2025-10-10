import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OganizerComponent } from './oganizer.component';

describe('OganizerComponent', () => {
  let component: OganizerComponent;
  let fixture: ComponentFixture<OganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OganizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
