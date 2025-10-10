import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivemembersComponent } from './executivemembers.component';

describe('ExecutivemembersComponent', () => {
  let component: ExecutivemembersComponent;
  let fixture: ComponentFixture<ExecutivemembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutivemembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutivemembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
