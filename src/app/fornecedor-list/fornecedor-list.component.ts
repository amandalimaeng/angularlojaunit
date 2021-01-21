import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { FornecedorService } from '../fornecedor.service';  
import { Fornecedor } from '../fornecedor';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-fornecedor-list',  
  templateUrl: './fornecedor-list.component.html',  
  styleUrls: ['./fornecedor-list.component.css'] ,
  
})  
export class FornecedorListComponent implements OnInit {  
  
 constructor(private fornecedorservice:FornecedorService) { }  
  
  fornecedorsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  fornecedors: Observable<Fornecedor[]>;  
  fornecedor : Fornecedor=new Fornecedor();  
  deleteMessage=false;  
  fornecedorlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.fornecedorservice.getFornecedorList().subscribe(data =>{  
    this.fornecedors =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteFornecedor(id: number) {  
    this.fornecedorservice.deleteFornecedor(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.fornecedorservice.getFornecedorList().subscribe(data =>{  
            this.fornecedors=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateFornecedor(id: number){  
    this.fornecedorservice.getFornecedor(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.fornecedorlist=array
         
                     },  
        error => console.log(error));  
  }  
  
  fornecedorupdateform=new FormGroup({  
    id:new FormControl(),  
    cnpj:new FormControl(),  
    email:new FormControl(),  
    endereco:new FormControl(),
    nome:new FormControl(),  
    telefone:new FormControl(),
    

  });  
  
  updateCli(updfornecedor){  
    this.fornecedor=new Fornecedor();   
    this.fornecedor.id=this.FornecedorId.value;
    this.fornecedor.cnpj=this.FornecedorCnpj.value;
    this.fornecedor.email=this.FornecedoEmail.value;
    this.fornecedor.endereco=this.FornecedorEndereco.value;
    this.fornecedor.nome=this.FornecedorNome.value;
    this.fornecedor.telefone=this.FornecedorTelefone.value;
   

  
   
  console.log(updfornecedor)
   this.fornecedorservice.updateFornecedor(this.fornecedor.id,this.fornecedor).subscribe(  
    data => {       
      this.isupdated=true;  
      this.fornecedorservice.getFornecedorList().subscribe(data =>{  
      this.fornecedors=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get FornecedorCnpj(){  
    return this.fornecedorupdateform.get('cnpj');  
  }  

  get FornecedoEmail(){  
    return this.fornecedorupdateform.get('email');  
  }  

  get FornecedorEndereco(){  
    return this.fornecedorupdateform.get('endereco');  
  }  
  get FornecedorNome(){  
    return this.fornecedorupdateform.get('nome');  
  }  


  get FornecedorDataNascimento(){  
    return this.fornecedorupdateform.get('dataNascimento');  
  }  

  get FornecedorTelefone(){  
    return this.fornecedorupdateform.get('telefone');  
  }  

  get FornecedorId(){  
    return this.fornecedorupdateform.get('id');  
  }  

  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  