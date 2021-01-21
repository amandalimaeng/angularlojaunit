import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ItensService } from '../itens.service';
import { Itens } from '../itens';
import { Observable, Subject } from "rxjs";


import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrls: ['./itens-list.component.css'],

})
export class ItensListComponent implements OnInit {

  constructor(private itensservice: ItensService) { }

  itenssArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  itenss: Observable<Itens[]>;
  itens: Itens = new Itens();
  deleteMessage = false;
  itenslist: any;
  isupdated = false;


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.itensservice.getItensList().subscribe(data => {
      this.itenss = data;
      this.dtTrigger.next();
    })
  }

  deleteItens(id: number) {
    this.itensservice.deleteItens(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.itensservice.getItensList().subscribe(data => {
            this.itenss = data
          })
        },
        error => console.log(error));
  }

  updateItens(id: number) {
    this.itensservice.getItens(id)
      .subscribe(
        data => {
          var array = [];
          array.push(data);
          this.itenslist = array

        },
        error => console.log(error));
  }

  itensupdateform = new FormGroup({
    id: new FormControl(),
    produto: new FormControl(),
    fornecedor: new FormControl(),
    marca: new FormControl(),
    cliente: new FormControl(),








  });

  updateCli(upditens) {
    this.itens = new Itens();
    this.itens.id = this.ItensId.value;
    this.itens.produto = this.ItensProduto.value;
    this.itens.fornecedor = this.ItensFornecedor.value;
    this.itens.marca = this.ItensMarca.value;
    this.itens.cliente = this.ItensCliente.value;



    this.itensservice.updateItens(this.itens.id, this.itens).subscribe(
      data => {
        this.isupdated = true;
        this.itensservice.getItensList().subscribe(data => {
          this.itenss = data
        })
      },
      error => console.log(error));
  }


  get ItensProduto() {
    return this.itensupdateform.get('produto');
  }

  get ItensFornecedor() {
    return this.itensupdateform.get('fornecedor');
  }

  get ItensMarca() {
    return this.itensupdateform.get('marca');
  }
  get ItensCliente() {
    return this.itensupdateform.get('cliente');
  }


  get ItensId() {
    return this.itensupdateform.get('id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }
}  