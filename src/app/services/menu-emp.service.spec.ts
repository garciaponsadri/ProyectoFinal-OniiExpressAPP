import { TestBed } from '@angular/core/testing';

import { MenuEmpService } from './menu-emp.service';

describe('MenuEmpService', () => {
  let service: MenuEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
