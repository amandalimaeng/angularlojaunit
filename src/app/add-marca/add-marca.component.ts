

import { Component, OnInit } from '@angular/core';  
import { MarcaService } from '../marca.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Marca } from '../marca';  
@Component({  
  selector: 'app-add-marca',  
  templateUrl: './add-marca.component.html',  
  styleUrls: ['./add-marca.component.css']  
})  
export class AddMarcaComponent implements OnInit {  
  
  constructor(private marcaservice:MarcaService) { }  
  
  marca : Marca=new Marca();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  marcasaveform=new FormGroup({  
    descricao:new FormControl('' , [Validators.required] ),
    nome:new FormControl('' , [Validators.required] ),
   
  });  
  
  saveMarca(saveMarca){  
    this.marca=new Marca();     
  
    this.marca.descricao=this.MarcaDescricao.value;
    this.marca.nome=this.MarcaNome.value;
    
    


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.marcaservice.createMarca(this.marca)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.marca = new Marca();  
  }  


  get MarcaDescricao(){  
    return this.marcasaveform.get('descricao');  
  }  

  get MarcaNome(){  
    return this.marcasaveform.get('nome');  
  }  

  

  
  addMarcaForm(){  
    this.submitted=false;  
    this.marcasaveform.reset();  
  }  
}  