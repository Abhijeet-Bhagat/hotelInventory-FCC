import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsTableComponent } from './rooms-table.component';

describe('RoomsTableComponent', () => {
  let component: RoomsTableComponent;
  let fixture: ComponentFixture<RoomsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsTableComponent]
    });
    fixture = TestBed.createComponent(RoomsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
