

import { Component, OnInit } from '@angular/core';  
import { ClienteService } from '../cliente.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Cliente } from '../cliente';  
@Component({  
  selector: 'app-add-cliente',  
  templateUrl: './add-cliente.component.html',  
  styleUrls: ['./add-cliente.component.css']  
})  
export class AddClienteComponent implements OnInit {  
  
  constructor(private clienteservice:ClienteService) { }  
  
  cliente : Cliente=new Cliente();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  clientesaveform=new FormGroup({  
    apelido:new FormControl('' , [Validators.required] ),
    cpf:new FormControl('' , [Validators.required] ),
    dataNascimento:new FormControl('' , [Validators.required ] ),
   email:new FormControl('' , [Validators.required] ),
    nome:new FormControl('' , [Validators.required] ),
   nomeSocial:new FormControl('' , [Validators.required] ),
    sexo:new FormControl('' , [Validators.required] ),
   telefone:new FormControl('' , [Validators.required] ),

  });  
  
  saveCliente(saveCliente){  
    this.cliente=new Cliente();     
  
    this.cliente.apelido=this.ClienteApelido.value;
    this.cliente.cpf=this.ClienteCpf.value;
    this.cliente.dataNascimento=this.ClienteDataNascimento.value;
    this.cliente.email=this.ClienteEmail.value;
    this.cliente.nome=this.ClienteNome.value;
    this.cliente.nomeSocial=this.ClienteNomeSocial.value;
    this.cliente.sexo=this.ClienteSexo.value;
    this.cliente.telefone=this.ClienteTelefone.value;

    


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.clienteservice.createCliente(this.cliente)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.cliente = new Cliente();  
  }  


  get ClienteTelefone(){  
    return this.clientesaveform.get('telefone');  
  }  

  get ClienteNome(){  
    return this.clientesaveform.get('nome');  
  }  

  get ClienteSexo(){  
    return this.clientesaveform.get('sexo');  
  }  
  get ClienteNomeSocial(){  
    return this.clientesaveform.get('nomeSocial');  
  }  


  get ClienteDataNascimento(){  
    return this.clientesaveform.get('dataNascimento');  
  }  

  get ClienteEmail(){  
    return this.clientesaveform.get('email');  
  }  

  get ClienteCpf(){  
    return this.clientesaveform.get('cpf');  
  }  
  
  get ClienteApelido(){  
    return this.clientesaveform.get('apelido');  
  }  
  

  
  addClienteForm(){  
    this.submitted=false;  
    this.clientesaveform.reset();  
  }  
}  