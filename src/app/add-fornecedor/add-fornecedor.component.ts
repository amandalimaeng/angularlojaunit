

import { Component, OnInit } from '@angular/core';  
import { FornecedorService } from '../fornecedor.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Fornecedor } from '../fornecedor';  
@Component({  
  selector: 'app-add-fornecedor',  
  templateUrl: './add-fornecedor.component.html',  
  styleUrls: ['./add-fornecedor.component.css']  
})  
export class AddFornecedorComponent implements OnInit {  
  
  constructor(private fornecedorservice:FornecedorService) { }  
  
  fornecedor : Fornecedor=new Fornecedor();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  fornecedorsaveform=new FormGroup({  
    cnpj:new FormControl('' , [Validators.required] ),
    email:new FormControl('' , [Validators.required] ),
    endereco:new FormControl('' , [Validators.required ] ),
   nome:new FormControl('' , [Validators.required] ),
    telefone:new FormControl('' , [Validators.required] ),
   
  });  
  
  saveFornecedor(saveFornecedor){  
    this.fornecedor=new Fornecedor();     
  
    this.fornecedor.cnpj=this.FornecedorCnpj.value;
    this.fornecedor.email=this.FornecedorEmail.value;
    this.fornecedor.endereco=this.FornecedorEndereco.value;
    this.fornecedor.nome=this.FornecedorNome.value;
    this.fornecedor.telefone=this.FornecedorTelefone.value;
   


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.fornecedorservice.createFornecedor(this.fornecedor)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.fornecedor = new Fornecedor();  
  }  


  get FornecedorCnpj(){  
    return this.fornecedorsaveform.get('cnpj');  
  }  

  get FornecedorEmail(){  
    return this.fornecedorsaveform.get('email');  
  }  

  get FornecedorEndereco(){  
    return this.fornecedorsaveform.get('endereco');  
  }  
  get FornecedorNome(){  
    return this.fornecedorsaveform.get('nome');  
  }  


  get FornecedorTelefone(){  
    return this.fornecedorsaveform.get('telefone');  
  }  

  addFornecedorForm(){  
    this.submitted=false;  
    this.fornecedorsaveform.reset();  
  }  
}  