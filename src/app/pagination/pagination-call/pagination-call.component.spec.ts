import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCallComponent } from './pagination-call.component';

describe('PaginationCallComponent', () => {
  let component: PaginationCallComponent;
  let fixture: ComponentFixture<PaginationCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
