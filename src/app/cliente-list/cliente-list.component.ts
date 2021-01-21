import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { ClienteService } from '../cliente.service';  
import { Cliente } from '../cliente';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-cliente-list',  
  templateUrl: './cliente-list.component.html',  
  styleUrls: ['./cliente-list.component.css'] ,
  
})  
export class ClienteListComponent implements OnInit {  
  
 constructor(private clienteservice:ClienteService) { }  
  
  clientesArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  clientes: Observable<Cliente[]>;  
  cliente : Cliente=new Cliente();  
  deleteMessage=false;  
  clientelist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.clienteservice.getClienteList().subscribe(data =>{  
    this.clientes =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteCliente(id: number) {  
    this.clienteservice.deleteCliente(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.clienteservice.getClienteList().subscribe(data =>{  
            this.clientes=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateCliente(id: number){  
    this.clienteservice.getCliente(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.clientelist=array
         
                     },  
        error => console.log(error));  
  }  
  
  clienteupdateform=new FormGroup({  
    id:new FormControl(),  
    nome:new FormControl(),  
    email:new FormControl(),  
    apelido:new FormControl(),
    cpf:new FormControl(),  
    dataNascimento:new FormControl(),
    sexo:new FormControl(),  
    telefone:new FormControl(),
    nomeSocial:new FormControl()
  });  
  
  updateCli(updcliente){  
    this.cliente=new Cliente();   
    this.cliente.id=this.ClienteId.value;
    this.cliente.apelido=this.ClienteApelido.value;
    this.cliente.cpf=this.ClienteCpf.value;
    this.cliente.dataNascimento=this.ClienteDataNascimento.value;
    this.cliente.email=this.ClienteEmail.value;
    this.cliente.nome=this.ClienteNome.value;
    this.cliente.nomeSocial=this.ClienteNomeSocial.value;
    this.cliente.sexo=this.ClienteSexo.value;
    this.cliente.telefone=this.ClienteTelefone.value;
   
  console.log(updcliente)
   this.clienteservice.updateCliente(this.cliente.id,this.cliente).subscribe(  
    data => {       
      this.isupdated=true;  
      this.clienteservice.getClienteList().subscribe(data =>{  
      this.clientes=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get ClienteTelefone(){  
    return this.clienteupdateform.get('telefone');  
  }  

  get ClienteNome(){  
    return this.clienteupdateform.get('nome');  
  }  

  get ClienteSexo(){  
    return this.clienteupdateform.get('sexo');  
  }  
  get ClienteNomeSocial(){  
    return this.clienteupdateform.get('nomeSocial');  
  }  


  get ClienteDataNascimento(){  
    return this.clienteupdateform.get('dataNascimento');  
  }  

  get ClienteEmail(){  
    return this.clienteupdateform.get('email');  
  }  

  get ClienteCpf(){  
    return this.clienteupdateform.get('cpf');  
  }  
  
  get ClienteApelido(){  
    return this.clienteupdateform.get('apelido');  
  }  
  
  get ClienteId(){  
    return this.clienteupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  