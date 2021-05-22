import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCreateComponent } from './notas-create.component';

describe('NotasCreateComponent', () => {
  let component: NotasCreateComponent;
  let fixture: ComponentFixture<NotasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
