import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';  
import { ProdutoService } from '../produto.service';  
import { Produto } from '../produto';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-produto-list',  
  templateUrl: './produto-list.component.html',  
  styleUrls: ['./produto-list.component.css'] ,
  
})  
export class ProdutoListComponent implements OnInit {  
  
 constructor(private produtoservice:ProdutoService) { }  
  
  produtosArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  produtos: Observable<Produto[]>;  
  produto : Produto=new Produto();  
  deleteMessage=false;  
  produtolist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.produtoservice.getProdutoList().subscribe(data =>{  
    this.produtos =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteProduto(id: number) {  
    this.produtoservice.deleteProduto(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.produtoservice.getProdutoList().subscribe(data =>{  
            this.produtos=data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateProduto(id: number){  
    this.produtoservice.getProduto(id)  
      .subscribe(  
        data => {  
          var array = [];
           array.push(data);
          this.produtolist=array
         
                     },  
        error => console.log(error));  
  }  
  
  produtoupdateform=new FormGroup({  
    id:new FormControl(),  
    descricao:new FormControl(),  
    idCategoria:new FormControl(),  
    idFornecedor:new FormControl(),
    idMarca:new FormControl(),  
    nome:new FormControl(),
    precoUnitario:new FormControl(),  
    unidade:new FormControl(),
   

    
    
  });  
  
  updateCli(updproduto){  
    this.produto=new Produto();   
    this.produto.id=this.ProdutoId.value;
    this.produto.descricao=this.ProdutoDescricao.value;
    this.produto.idCategoria=this.ProdutoIdCategoria.value;
    this.produto.idFornecedor=this.ProdutoIdFornecedor.value;
    this.produto.idMarca=this.ProdutoIdMarca.value;
    this.produto.nome=this.ProdutoNome.value;
    this.produto.precoUnitario=this.ProdutoPrecoUnitario.value;
    this.produto.unidade=this.ProdutoUnidade.value;
    








   
  console.log(updproduto)
   this.produtoservice.updateProduto(this.produto.id,this.produto).subscribe(  
    data => {       
      this.isupdated=true;  
      this.produtoservice.getProdutoList().subscribe(data =>{  
      this.produtos=data  
        })  
    },  
    error => console.log(error));  
  }  
  

  get ProdutoDescricao(){  
    return this.produtoupdateform.get('descricao');  
  }  

  get ProdutoIdCategoria(){  
    return this.produtoupdateform.get('idCategoria');  
  }  

  get ProdutoIdFornecedor(){  
    return this.produtoupdateform.get('idFornecedor');  
  }  
  get ProdutoIdMarca(){  
    return this.produtoupdateform.get('idMarca');  
  }  


  get ProdutoNome(){  
    return this.produtoupdateform.get('nome');  
  }  

  get ProdutoPrecoUnitario(){  
    return this.produtoupdateform.get('precoUnitario');  
  }  

  get ProdutoUnidade(){  
    return this.produtoupdateform.get('unidade');  
  }  

  get ProdutoId(){  
    return this.produtoupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  