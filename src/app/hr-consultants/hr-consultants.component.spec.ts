import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrConsultantsComponent } from './hr-consultants.component';

describe('HrConsultantsComponent', () => {
  let component: HrConsultantsComponent;
  let fixture: ComponentFixture<HrConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrConsultantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
