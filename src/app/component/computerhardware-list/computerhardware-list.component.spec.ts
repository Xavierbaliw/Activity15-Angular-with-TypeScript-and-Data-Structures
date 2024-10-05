import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerhardwareListComponent } from './computerhardware-list.component';

describe('ComputerhardwareListComponent', () => {
  let component: ComputerhardwareListComponent;
  let fixture: ComponentFixture<ComputerhardwareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerhardwareListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerhardwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
