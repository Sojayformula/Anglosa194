import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveLayoutComponent } from './objective-layout.component';

describe('ObjectiveLayoutComponent', () => {
  let component: ObjectiveLayoutComponent;
  let fixture: ComponentFixture<ObjectiveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
