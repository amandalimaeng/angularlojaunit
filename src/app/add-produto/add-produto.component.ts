

import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../produto';
@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  constructor(private produtoservice: ProdutoService) { }

  produto: Produto = new Produto();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  produtosaveform = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    idCategoria: new FormControl('', [Validators.required]),
    idFornecedor: new FormControl('', [Validators.required]),
    idMarca: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    precoUnitario: new FormControl('', [Validators.required]),
    unidade: new FormControl('', [Validators.required]),

  });

  saveProduto(saveProduto) {
    this.produto = new Produto();

    this.produto.descricao = this.ProdutoDescricao.value;
    this.produto.idCategoria = this.ProdutoIdCategoria.value;
    this.produto.idFornecedor = this.ProdutoIdFornecedor.value;
    this.produto.idMarca = this.ProdutoIdMarca.value;
    this.produto.nome = this.ProdutoNome.value;
    this.produto.precoUnitario = this.ProdutoPrecoUnitario.value;
    this.produto.unidade = this.ProdutoUnidade.value;





    this.submitted = true;
    this.save();
  }



  save() {
    this.produtoservice.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
  }


  get ProdutoDescricao() {
    return this.produtosaveform.get('descricao');
  }

  get ProdutoIdCategoria() {
    return this.produtosaveform.get('idCategoria');
  }

  get ProdutoIdFornecedor() {
    return this.produtosaveform.get('idFornecedor');
  }
  get ProdutoIdMarca() {
    return this.produtosaveform.get('idMarca');
  }


  get ProdutoNome() {
    return this.produtosaveform.get('nome');
  }

  get ProdutoPrecoUnitario() {
    return this.produtosaveform.get('precoUnitario');
  }

  get ProdutoUnidade() {
    return this.produtosaveform.get('unidade');
  }



  addProdutoForm() {
    this.submitted = false;
    this.produtosaveform.reset();
  }
}  