import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsformComponent } from './requirementsform.component';

describe('RequirementsformComponent', () => {
  let component: RequirementsformComponent;
  let fixture: ComponentFixture<RequirementsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
