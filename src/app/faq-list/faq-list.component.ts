import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { FaqService } from '../faq.service';  
import { Faq } from '../faq';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-faq-list',  
  templateUrl: './faq-list.component.html',  
  styleUrls: ['./faq-list.component.css'] ,
  
})  
export class FaqListComponent implements OnInit {  
  
 constructor(private faqservice:FaqService) { }  
  
  faqsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  faqs: Observable<Faq[]>;  
  faq : Faq=new Faq();  
  deleteMessage=false;  
  faqlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.faqservice.getFaqList().subscribe(data =>{  
    this.faqs =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteFaq(id: number) {  
    this.faqservice.deleteFaq(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.faqservice.getFaqList().subscribe(data =>{  
            this.faqs=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateFaq(id: number){  
    this.faqservice.getFaq(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.faqlist=array
         
                     },  
        error => console.log(error));  
  }  
  
  faqupdateform=new FormGroup({  
    id:new FormControl(),  
    datahora:new FormControl('' , [Validators.required] ),
    idProduto:new FormControl('' , [Validators.required] ),
    texto:new FormControl('' , [Validators.required ] ),
  });  
  
  updateCli(updfaq){  
    this.faq=new Faq();   
    this.faq.id=this.FaqId.value;
    this.faq.datahora=this.FaqDataHora.value;
    this.faq.idProduto=this.FaqIdProduto.value;
    this.faq.texto=this.FaqTexto.value;
    
  console.log(updfaq)
   this.faqservice.updateFaq(this.faq.id,this.faq).subscribe(  
    data => {       
      this.isupdated=true;  
      this.faqservice.getFaqList().subscribe(data =>{  
      this.faqs=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get FaqDataHora(){  
    return this.faqupdateform.get('datahora');  
  }  

  get FaqIdProduto(){  
    return this.faqupdateform.get('idProduto');  
  }  

  get FaqTexto(){  
    return this.faqupdateform.get('texto');  
  }  
 
  
  get FaqId(){  
    return this.faqupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  