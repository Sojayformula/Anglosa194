import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurerComponent } from './treasurer.component';

describe('TreasurerComponent', () => {
  let component: TreasurerComponent;
  let fixture: ComponentFixture<TreasurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreasurerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreasurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
