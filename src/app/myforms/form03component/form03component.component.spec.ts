import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form03componentComponent } from './form03component.component';

describe('Form03componentComponent', () => {
  let component: Form03componentComponent;
  let fixture: ComponentFixture<Form03componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form03componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form03componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
