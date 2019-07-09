import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form04componentComponent } from './form04component.component';

describe('Form04componentComponent', () => {
  let component: Form04componentComponent;
  let fixture: ComponentFixture<Form04componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form04componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form04componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
