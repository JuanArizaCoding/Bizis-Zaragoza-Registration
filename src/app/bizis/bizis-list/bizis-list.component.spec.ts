import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizisListComponent } from './bizis-list.component';

describe('BizisListComponent', () => {
  let component: BizisListComponent;
  let fixture: ComponentFixture<BizisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
