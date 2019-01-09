import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllComponent } from './edit-all.component';

describe('EditAllComponent', () => {
  let component: EditAllComponent;
  let fixture: ComponentFixture<EditAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
