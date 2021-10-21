import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScroliderComponent } from './ng-scrolider.component';

describe('NgScroliderComponent', () => {
  let component: NgScroliderComponent;
  let fixture: ComponentFixture<NgScroliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgScroliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgScroliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
