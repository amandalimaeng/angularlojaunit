import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { MarcaService } from '../marca.service';  
import { Marca } from '../marca';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-marca-list',  
  templateUrl: './marca-list.component.html',  
  styleUrls: ['./marca-list.component.css'] ,
  
})  
export class MarcaListComponent implements OnInit {  
  
 constructor(private marcaservice:MarcaService) { }  
  
  marcasArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  marcas: Observable<Marca[]>;  
  marca : Marca=new Marca();  
  deleteMessage=false;  
  marcalist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.marcaservice.getMarcaList().subscribe(data =>{  
    this.marcas =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteMarca(id: number) {  
    this.marcaservice.deleteMarca(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.marcaservice.getMarcaList().subscribe(data =>{  
            this.marcas=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateMarca(id: number){  
    this.marcaservice.getMarca(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.marcalist=array
         
                     },  
        error => console.log(error));  
  }  
  
  marcaupdateform=new FormGroup({  
    id:new FormControl(),  
    descricao:new FormControl(),  
    nome:new FormControl(),  
   



  });  
  
  updateCli(updmarca){  
    this.marca=new Marca();   
    this.marca.id=this.MarcaId.value;
    this.marca.descricao=this.MarcaDescricao.value;
    this.marca.nome=this.MarcaNome.value;
   
   
  console.log(updmarca)
   this.marcaservice.updateMarca(this.marca.id,this.marca).subscribe(  
    data => {       
      this.isupdated=true;  
      this.marcaservice.getMarcaList().subscribe(data =>{  
      this.marcas=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get MarcaDescricao(){  
    return this.marcaupdateform.get('descricao');  
  }  

  get MarcaNome(){  
    return this.marcaupdateform.get('nome');  
  }  

 
  
  get MarcaId(){  
    return this.marcaupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  