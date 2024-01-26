import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizisMapComponent } from './bizis-map.component';

describe('BizisMapComponent', () => {
  let component: BizisMapComponent;
  let fixture: ComponentFixture<BizisMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizisMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizisMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
