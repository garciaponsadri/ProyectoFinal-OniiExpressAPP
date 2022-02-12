import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparizeComponent } from './comparize.component';

describe('ComparizeComponent', () => {
  let component: ComparizeComponent;
  let fixture: ComponentFixture<ComparizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
