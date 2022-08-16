import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditemProjectComponent } from './carditem-project.component';

describe('CarditemProjectComponent', () => {
  let component: CarditemProjectComponent;
  let fixture: ComponentFixture<CarditemProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarditemProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarditemProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
