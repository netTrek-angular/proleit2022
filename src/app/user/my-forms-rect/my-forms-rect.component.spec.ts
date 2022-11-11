import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormsRectComponent } from './my-forms-rect.component';

describe('MyFormsRectComponent', () => {
  let component: MyFormsRectComponent;
  let fixture: ComponentFixture<MyFormsRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormsRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFormsRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
