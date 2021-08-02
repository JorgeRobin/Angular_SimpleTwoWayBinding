import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTwoWayBindingComponent } from './simpleTwoWayBinding.component';

describe('SimpleTwoWayBindingComponent', () => {
  let component: SimpleTwoWayBindingComponent;
  let fixture: ComponentFixture<SimpleTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
