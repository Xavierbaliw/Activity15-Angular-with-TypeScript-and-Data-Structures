import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappListComponent } from './mobileapp-list.component';

describe('MobileappListComponent', () => {
  let component: MobileappListComponent;
  let fixture: ComponentFixture<MobileappListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileappListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
