

import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormaPagamento } from '../forma-pagamento';
@Component({
  selector: 'app-add-formaPagamento',
  templateUrl: './add-forma-pagamento.component.html',
  styleUrls: ['./add-forma-pagamento.component.css']
})
export class AddFormaPagamentoComponent implements OnInit {

  constructor(private formaPagamentoservice: FormaPagamentoService) { }

  formaPagamento: FormaPagamento = new FormaPagamento();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  formaPagamentosaveform = new FormGroup({
    ativo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    forma: new FormControl('', [Validators.required]),

  });

  saveFormaPagamento(saveFormaPagamento) {
    this.formaPagamento = new FormaPagamento();

    this.formaPagamento.ativo = this.FormaPagamentoAtivo.value;
    this.formaPagamento.descricao = this.FormaPagamentoDescricao.value;
    this.formaPagamento.forma = this.FormaPagamentoForma.value;




    this.submitted = true;
    this.save();
  }



  save() {
    this.formaPagamentoservice.createFormaPagamento(this.formaPagamento)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formaPagamento = new FormaPagamento();
  }


  get FormaPagamentoAtivo() {
    return this.formaPagamentosaveform.get('ativo');
  }

  get FormaPagamentoDescricao() {
    return this.formaPagamentosaveform.get('descricao');
  }

  get FormaPagamentoForma() {
    return this.formaPagamentosaveform.get('forma');
  }

  addFormaPagamentoForm() {
    this.submitted = false;
    this.formaPagamentosaveform.reset();
  }
}  