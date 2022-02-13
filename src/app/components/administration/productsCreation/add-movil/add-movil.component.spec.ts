import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovilComponent } from './add-movil.component';

describe('AddMovilComponent', () => {
  let component: AddMovilComponent;
  let fixture: ComponentFixture<AddMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
