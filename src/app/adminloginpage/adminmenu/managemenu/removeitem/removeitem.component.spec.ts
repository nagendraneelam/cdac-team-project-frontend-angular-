import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveitemComponent } from './removeitem.component';

describe('RemoveitemComponent', () => {
  let component: RemoveitemComponent;
  let fixture: ComponentFixture<RemoveitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
