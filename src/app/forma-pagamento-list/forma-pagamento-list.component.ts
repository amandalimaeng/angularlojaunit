import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { FormaPagamentoService } from '../forma-pagamento.service';  
import { FormaPagamento } from '../forma-pagamento';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-forma-pagamento-list',  
  templateUrl: './forma-pagamento-list.component.html',  
  styleUrls: ['./forma-pagamento-list.component.css'] ,
  
})  
export class FormaPagamentoListComponent implements OnInit {  
  
 constructor(private formaPagamentoservice:FormaPagamentoService) { }  
  
  formaPagamentosArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  formaPagamentos: Observable<FormaPagamento[]>;  
  formaPagamento : FormaPagamento=new FormaPagamento();  
  deleteMessage=false;  
  formaPagamentolist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.formaPagamentoservice.getFormaPagamentoList().subscribe(data =>{  
    this.formaPagamentos =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteFormaPagamento(id: number) {  
    this.formaPagamentoservice.deleteFormaPagamento(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.formaPagamentoservice.getFormaPagamentoList().subscribe(data =>{  
            this.formaPagamentos=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateFormaPagamento(id: number){  
    this.formaPagamentoservice.getFormaPagamento(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.formaPagamentolist=array
         
                     },  
        error => console.log(error));  
  }  
  
  formaPagamentoupdateform=new FormGroup({  
    id:new FormControl(),  
    ativo:new FormControl(),  
    descricao:new FormControl(),  
    forma:new FormControl(),
   




  });  
  
  updateCli(updformaPagamento){  
    this.formaPagamento=new FormaPagamento();   
    this.formaPagamento.id=this.FormaPagamentoId.value;
    this.formaPagamento.ativo=this.FormaPagamentoAtivo.value;
    this.formaPagamento.descricao=this.FormaPagamentoDescricao.value;
    this.formaPagamento.forma=this.FormaPagamentoForma.value;
    
   
  console.log(updformaPagamento)
   this.formaPagamentoservice.updateFormaPagamento(this.formaPagamento.id,this.formaPagamento).subscribe(  
    data => {       
      this.isupdated=true;  
      this.formaPagamentoservice.getFormaPagamentoList().subscribe(data =>{  
      this.formaPagamentos=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get FormaPagamentoAtivo(){  
    return this.formaPagamentoupdateform.get('ativo');  
  }  

  get FormaPagamentoDescricao(){  
    return this.formaPagamentoupdateform.get('descricao');  
  }  

  get FormaPagamentoForma(){  
    return this.formaPagamentoupdateform.get('forma');  
  }  
 
  
  get FormaPagamentoId(){  
    return this.formaPagamentoupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  