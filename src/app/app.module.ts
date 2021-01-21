import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import {DataTablesModule} from 'angular-datatables';  
import { ClienteListComponent } from './cliente-list/cliente-list.component';  
import { AddClienteComponent } from './add-cliente/add-cliente.component';  
import * as $ from "jquery";
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { AddFaqComponent } from './add-faq/add-faq.component';
import { AddFormaPagamentoComponent } from './add-forma-pagamento/add-forma-pagamento.component';
import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { AddFornecedorComponent } from './add-fornecedor/add-fornecedor.component';
import { AddItensComponent } from './add-itens/add-itens.component';
import { ItensListComponent } from './itens-list/itens-list.component';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { AddMarcaComponent } from './add-marca/add-marca.component';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { VendaListComponent } from './venda-list/venda-list.component';
import { AddVendaComponent } from './add-venda/add-venda.component';

  
@NgModule({  
  declarations: [  
    AppComponent,  
    ClienteListComponent,  
    AddClienteComponent, AddCategoriaComponent, CategoriaListComponent, FaqListComponent, AddFaqComponent, AddFormaPagamentoComponent, FormaPagamentoListComponent, FornecedorListComponent, AddFornecedorComponent, AddItensComponent, ItensListComponent, MarcaListComponent, AddMarcaComponent, AddProdutoComponent, ProdutoListComponent, VendaListComponent, AddVendaComponent,  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  


export class AppModule { }  
