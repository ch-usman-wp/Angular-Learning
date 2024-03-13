import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrrversComponent } from './srrvers.component';

describe('SrrversComponent', () => {
  let component: SrrversComponent;
  let fixture: ComponentFixture<SrrversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrrversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SrrversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
