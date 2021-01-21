

import { Component, OnInit } from '@angular/core';  
import { ItensService } from '../itens.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Itens } from '../itens';  
@Component({  
  selector: 'app-add-itens',  
  templateUrl: './add-itens.component.html',  
  styleUrls: ['./add-itens.component.css']  
})  
export class AddItensComponent implements OnInit {  
  
  constructor(private itensservice:ItensService) { }  
  
  itens : Itens=new Itens();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  itenssaveform=new FormGroup({  
    produto:new FormControl('' , [Validators.required] ),
    fornecedor:new FormControl('' , [Validators.required] ),
    marca:new FormControl('' , [Validators.required ] ),
    cliente:new FormControl('' , [Validators.required] ),
    







  });  
  
  saveItens(saveItens){  
    this.itens=new Itens();     
  
    this.itens.produto=this.ItensProduto.value;
    this.itens.fornecedor=this.ItensFornecedor.value;
    this.itens.marca=this.ItensMarca.value;
    this.itens.cliente=this.ItensCliente.value;
   
   
 
    


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.itensservice.createItens(this.itens)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.itens = new Itens();  
  }  


  get ItensProduto(){  
    return this.itenssaveform.get('produto');  
  }  

  get ItensFornecedor(){  
    return this.itenssaveform.get('fornecedor');  
  }  

  get ItensMarca(){  
    return this.itenssaveform.get('marca');  
  }  
  get ItensCliente(){  
    return this.itenssaveform.get('cliente');  
  }  


  

  
  addItensForm(){  
    this.submitted=false;  
    this.itenssaveform.reset();  
  }  
}  