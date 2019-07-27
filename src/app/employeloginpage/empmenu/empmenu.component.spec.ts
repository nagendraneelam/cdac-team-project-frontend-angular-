import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmenuComponent } from './empmenu.component';

describe('EmpmenuComponent', () => {
  let component: EmpmenuComponent;
  let fixture: ComponentFixture<EmpmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
