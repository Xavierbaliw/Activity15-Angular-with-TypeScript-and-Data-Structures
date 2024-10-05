import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecificationListComponent } from './laptopspecification-list.component';

describe('LaptopspecificationListComponent', () => {
  let component: LaptopspecificationListComponent;
  let fixture: ComponentFixture<LaptopspecificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopspecificationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopspecificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
