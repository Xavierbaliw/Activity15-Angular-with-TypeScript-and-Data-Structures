import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenuListComponent } from './foodmenu-list.component';

describe('FoodmenuListComponent', () => {
  let component: FoodmenuListComponent;
  let fixture: ComponentFixture<FoodmenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodmenuListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodmenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
