import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeloginpageComponent } from './employeloginpage.component';

describe('EmployeloginpageComponent', () => {
  let component: EmployeloginpageComponent;
  let fixture: ComponentFixture<EmployeloginpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeloginpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
