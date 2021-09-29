import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LproComponent } from './lpro.component';

describe('LproComponent', () => {
  let component: LproComponent;
  let fixture: ComponentFixture<LproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
