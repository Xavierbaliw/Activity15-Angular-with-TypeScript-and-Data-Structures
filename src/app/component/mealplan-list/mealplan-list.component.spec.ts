import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanListComponent } from './mealplan-list.component';

describe('MealplanListComponent', () => {
  let component: MealplanListComponent;
  let fixture: ComponentFixture<MealplanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealplanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealplanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
