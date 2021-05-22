import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasViewComponent } from './notas-view.component';

describe('NotasViewComponent', () => {
  let component: NotasViewComponent;
  let fixture: ComponentFixture<NotasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
