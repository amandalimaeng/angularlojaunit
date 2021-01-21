

import { Component, OnInit } from '@angular/core';  
import { VendaService } from '../venda.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Venda } from '../venda';  
@Component({  
  selector: 'app-add-venda',  
  templateUrl: './add-venda.component.html',  
  styleUrls: ['./add-venda.component.css']  
})  
export class AddVendaComponent implements OnInit {  
  
  constructor(private vendaservice:VendaService) { }  
  
  venda : Venda=new Venda();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  vendasaveform=new FormGroup({  
    cliente:new FormControl('' , [Validators.required] ),
    datahora:new FormControl('' , [Validators.required] ),
    formaPagamento:new FormControl('' , [Validators.required ] ),
    valorTotal:new FormControl('' , [Validators.required] ),
   
  });  
  
  saveVenda(saveVenda){  
    this.venda=new Venda();     
  
    this.venda.cliente=this.VendaCliente.value;
    this.venda.datahora=this.VendaDataHora.value;
    this.venda.formaPagamento=this.VendaFormaPagamento.value;
    this.venda.valorTotal=this.VendaValorTotal.value;
    
    


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.vendaservice.createVenda(this.venda)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.venda = new Venda();  
  }  


  get VendaDataHora(){  
    return this.vendasaveform.get('datahora');  
  }  

  get VendaFormaPagamento(){  
    return this.vendasaveform.get('formaPagamento');  
  }  

  get VendaCliente(){  
    return this.vendasaveform.get('cliente');  
  }  
  get VendaValorTotal(){  
    return this.vendasaveform.get('valorTotal');  
  }  


  
  addVendaForm(){  
    this.submitted=false;  
    this.vendasaveform.reset();  
  }  
}  