import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmembersComponent } from './adminmembers.component';

describe('AdminmembersComponent', () => {
  let component: AdminmembersComponent;
  let fixture: ComponentFixture<AdminmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminmembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
