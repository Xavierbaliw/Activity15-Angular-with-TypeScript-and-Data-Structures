import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicplayListComponent } from './musicplay-list.component';

describe('MusicplayListComponent', () => {
  let component: MusicplayListComponent;
  let fixture: ComponentFixture<MusicplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicplayListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
