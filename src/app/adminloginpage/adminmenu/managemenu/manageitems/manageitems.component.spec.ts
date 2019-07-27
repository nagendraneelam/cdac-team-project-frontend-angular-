import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageitemsComponent } from './manageitems.component';

describe('ManageitemsComponent', () => {
  let component: ManageitemsComponent;
  let fixture: ComponentFixture<ManageitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
