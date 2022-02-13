import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcesadorComponent } from './add-procesador.component';

describe('AddProcesadorComponent', () => {
  let component: AddProcesadorComponent;
  let fixture: ComponentFixture<AddProcesadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProcesadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcesadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
