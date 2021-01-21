

import { Component, OnInit } from '@angular/core';  
import { FaqService } from '../faq.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Faq } from '../faq';  
@Component({  
  selector: 'app-add-faq',  
  templateUrl: './add-faq.component.html',  
  styleUrls: ['./add-faq.component.css']  
})  
export class AddFaqComponent implements OnInit {  
  
  constructor(private faqservice:FaqService) { }  
  
  faq : Faq=new Faq();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  faqsaveform=new FormGroup({  
    datahora:new FormControl('' , [Validators.required] ),
    idProduto:new FormControl('' , [Validators.required] ),
    texto:new FormControl('' , [Validators.required ] ),
  
  });  
  
  saveFaq(saveFaq){  
    this.faq=new Faq();     
  
    this.faq.datahora=this.FaqDataHora.value;
    this.faq.idProduto=this.FaqIdProduto.value;
    this.faq.texto=this.FaqTexto.value;
   


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.faqservice.createFaq(this.faq)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.faq = new Faq();  
  }  


  get FaqDataHora(){  
    return this.faqsaveform.get('telefone');  
  }  

  get FaqIdProduto(){  
    return this.faqsaveform.get('nome');  
  }  

  get FaqTexto(){  
    return this.faqsaveform.get('sexo');  
  }  
  
  
  addFaqForm(){  
    this.submitted=false;  
    this.faqsaveform.reset();  
  }  
}  