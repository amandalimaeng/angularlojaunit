import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { VendaService } from '../venda.service';  
import { Venda } from '../venda';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-venda-list',  
  templateUrl: './venda-list.component.html',  
  styleUrls: ['./venda-list.component.css'] ,
  
})  
export class VendaListComponent implements OnInit {  
  
 constructor(private vendaservice:VendaService) { }  
  
  vendasArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  vendas: Observable<Venda[]>;  
  venda : Venda=new Venda();  
  deleteMessage=false;  
  vendalist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.vendaservice.getVendaList().subscribe(data =>{  
    this.vendas =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteVenda(id: number) {  
    this.vendaservice.deleteVenda(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.vendaservice.getVendaList().subscribe(data =>{  
            this.vendas=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateVenda(id: number){  
    this.vendaservice.getVenda(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.vendalist=array
         
                     },  
        error => console.log(error));  
  }  
  
  vendaupdateform=new FormGroup({  
    id:new FormControl(),  
    cliente:new FormControl(),  
    datahora:new FormControl(),  
    formaPagamento:new FormControl(),
    valorTotal:new FormControl(),  
    


  });  
  
  updateCli(updvenda){  
    this.venda=new Venda();   
    this.venda.id=this.VendaId.value;
    this.venda.cliente=this.VendaCliente.value;
    this.venda.datahora=this.VendaDataHora.value;
    this.venda.formaPagamento=this.VendaFormaPagamento.value;
    this.venda.valorTotal=this.VendaValorTotal.value;
    

   
  console.log(updvenda)
   this.vendaservice.updateVenda(this.venda.id,this.venda).subscribe(  
    data => {       
      this.isupdated=true;  
      this.vendaservice.getVendaList().subscribe(data =>{  
      this.vendas=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get VendaCliente(){  
    return this.vendaupdateform.get('cliente');  
  }  

  get VendaDataHora(){  
    return this.vendaupdateform.get('datahora');  
  }  

  get VendaFormaPagamento(){  
    return this.vendaupdateform.get('formaPagamento');  
  }  
  get VendaValorTotal(){  
    return this.vendaupdateform.get('valorTotal');  
  }  

  get VendaId(){  
    return this.vendaupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  
