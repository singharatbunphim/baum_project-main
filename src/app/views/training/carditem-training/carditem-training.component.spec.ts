import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditemTrainingComponent } from './carditem-training.component';

describe('CarditemTrainingComponent', () => {
  let component: CarditemTrainingComponent;
  let fixture: ComponentFixture<CarditemTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarditemTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarditemTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
