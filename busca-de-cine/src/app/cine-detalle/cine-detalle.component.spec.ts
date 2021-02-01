import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineDetalleComponent } from './cine-detalle.component';

describe('CineDetalleComponent', () => {
  let component: CineDetalleComponent;
  let fixture: ComponentFixture<CineDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CineDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
