import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form01componentComponent } from './form01component.component';

describe('Form01componentComponent', () => {
  let component: Form01componentComponent;
  let fixture: ComponentFixture<Form01componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form01componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form01componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
