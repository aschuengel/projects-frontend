import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GartnerComponent } from './gartner.component';

describe('GartnerComponent', () => {
  let component: GartnerComponent;
  let fixture: ComponentFixture<GartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
