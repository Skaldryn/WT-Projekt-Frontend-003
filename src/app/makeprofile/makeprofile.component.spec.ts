import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeprofileComponent } from './makeprofile.component';

describe('MakeprofileComponent', () => {
  let component: MakeprofileComponent;
  let fixture: ComponentFixture<MakeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
