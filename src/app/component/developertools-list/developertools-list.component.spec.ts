import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopertoolsListComponent } from './developertools-list.component';

describe('DevelopertoolsListComponent', () => {
  let component: DevelopertoolsListComponent;
  let fixture: ComponentFixture<DevelopertoolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopertoolsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopertoolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
