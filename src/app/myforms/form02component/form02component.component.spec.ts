import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form02componentComponent } from './form02component.component';

describe('Form02componentComponent', () => {
  let component: Form02componentComponent;
  let fixture: ComponentFixture<Form02componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form02componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form02componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
