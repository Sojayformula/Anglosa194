import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivelayoutComponent } from './executivelayout.component';

describe('ExecutivelayoutComponent', () => {
  let component: ExecutivelayoutComponent;
  let fixture: ComponentFixture<ExecutivelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutivelayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutivelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
