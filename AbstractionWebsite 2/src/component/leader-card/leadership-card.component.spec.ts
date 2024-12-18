import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipCardComponent } from './leadership-card.component';

describe('LeadershipCardComponent', () => {
  let component: LeadershipCardComponent;
  let fixture: ComponentFixture<LeadershipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
