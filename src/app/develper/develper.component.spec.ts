import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelperComponent } from './develper.component';

describe('DevelperComponent', () => {
  let component: DevelperComponent;
  let fixture: ComponentFixture<DevelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
