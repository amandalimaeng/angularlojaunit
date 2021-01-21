import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { CategoriaService } from '../categoria.service';  
import { Categoria } from '../categoria';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-categoria-list',  
  templateUrl: './categoria-list.component.html',  
  styleUrls: ['./categoria-list.component.css'] ,
  
})  
export class CategoriaListComponent implements OnInit {  
  
 constructor(private categoriaservice:CategoriaService) { }  
  
  categoriasArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  categorias: Observable<Categoria[]>;  
  categoria : Categoria=new Categoria();  
  deleteMessage=false;  
  categorialist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.categoriaservice.getCategoriaList().subscribe(data =>{  
    this.categorias =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteCategoria(id: number) {  
    this.categoriaservice.deleteCategoria(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.categoriaservice.getCategoriaList().subscribe(data =>{  
            this.categorias=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateCategoria(id: number){  
    this.categoriaservice.getCategoria(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.categorialist=array
         
                     },  
        error => console.log(error));  
  }  
  
  categoriaupdateform=new FormGroup({  
    id:new FormControl(),  
    ativo:new FormControl(),  
    nome:new FormControl(),  
    
  });  
  
  updateCli(updcategoria){  
    this.categoria=new Categoria();   
    this.categoria.id=this.CategoriaId.value;
    this.categoria.ativo=this.CategoriaAtivo.value;
    this.categoria.nome=this.CategoriaNome.value;
    
   
  console.log(updcategoria)
   this.categoriaservice.updateCategoria(this.categoria.id,this.categoria).subscribe(  
    data => {       
      this.isupdated=true;  
      this.categoriaservice.getCategoriaList().subscribe(data =>{  
      this.categorias=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get CategoriaAtivo(){  
    return this.categoriaupdateform.get('ativo');  
  }  

  get CategoriaNome(){  
    return this.categoriaupdateform.get('nome');  
  }  

  
  get CategoriaId(){  
    return this.categoriaupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  