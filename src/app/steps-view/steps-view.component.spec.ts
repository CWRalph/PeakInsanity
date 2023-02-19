import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsViewComponent } from './steps-view.component';

describe('StepsViewComponent', () => {
  let component: StepsViewComponent;
  let fixture: ComponentFixture<StepsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
