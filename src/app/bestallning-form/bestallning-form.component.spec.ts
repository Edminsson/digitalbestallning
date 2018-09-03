import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestallningFormComponent } from './bestallning-form.component';

describe('BestallningFormComponent', () => {
  let component: BestallningFormComponent;
  let fixture: ComponentFixture<BestallningFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestallningFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestallningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not be submittet', () => {
    expect(component.submitted).toBeFalsy();
  });
});
