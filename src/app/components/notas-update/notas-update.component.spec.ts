import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasUpdateComponent } from './notas-update.component';

describe('NotasUpdateComponent', () => {
  let component: NotasUpdateComponent;
  let fixture: ComponentFixture<NotasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
