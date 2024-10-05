import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelListComponent } from './carmodel-list.component';

describe('CarmodelListComponent', () => {
  let component: CarmodelListComponent;
  let fixture: ComponentFixture<CarmodelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarmodelListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarmodelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
