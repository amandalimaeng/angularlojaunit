

import { Component, OnInit } from '@angular/core';  
import { CategoriaService } from '../categoria.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Categoria } from '../categoria';  
@Component({  
  selector: 'app-add-categoria',  
  templateUrl: './add-categoria.component.html',  
  styleUrls: ['./add-categoria.component.css']  
})  
export class AddCategoriaComponent implements OnInit {  
  
  constructor(private categoriaservice:CategoriaService) { }  
  
  categoria : Categoria=new Categoria();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  categoriasaveform=new FormGroup({  
    ativo:new FormControl('' , [Validators.required] ),
    nome:new FormControl('' , [Validators.required] ),
 
  });  
  
  saveCategoria(saveCategoria){  
    this.categoria=new Categoria();     
  
    this.categoria.ativo=this.CategoriaAtivo.value;
    this.categoria.nome=this.CategoriaNome.value;

    


    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.categoriaservice.createCategoria(this.categoria)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.categoria = new Categoria();  
  }  


  get CategoriaAtivo(){  
    return this.categoriasaveform.get('ativo');  
  }  

  get CategoriaNome(){  
    return this.categoriasaveform.get('nome');  
  }  

  
  addCategoriaForm(){  
    this.submitted=false;  
    this.categoriasaveform.reset();  
  }  
}  