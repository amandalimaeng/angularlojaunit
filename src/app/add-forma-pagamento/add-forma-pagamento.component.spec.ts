import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormaPagamentoComponent } from './add-forma-pagamento.component';

describe('AddFormaPagamentoComponent', () => {
  let component: AddFormaPagamentoComponent;
  let fixture: ComponentFixture<AddFormaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormaPagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
