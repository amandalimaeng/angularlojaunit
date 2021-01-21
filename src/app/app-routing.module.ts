import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { ClienteListComponent } from './cliente-list/cliente-list.component';  
import { AddClienteComponent } from './add-cliente/add-cliente.component';  
import { CategoriaListComponent } from './categoria-list/categoria-list.component';  
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';  
import { FaqListComponent } from './faq-list/faq-list.component';  
import { AddFaqComponent } from './add-faq/add-faq.component';  
import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';  
import { AddFormaPagamentoComponent } from './add-forma-pagamento/add-forma-pagamento.component';  
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';  
import { AddFornecedorComponent } from './add-fornecedor/add-fornecedor.component';  
import { ItensListComponent } from './itens-list/itens-list.component';  
import { AddItensComponent } from './add-itens/add-itens.component';  
import { MarcaListComponent } from './marca-list/marca-list.component';  
import { AddMarcaComponent } from './add-marca/add-marca.component';  
import { ProdutoListComponent } from './produto-list/produto-list.component';  
import { AddProdutoComponent } from './add-produto/add-produto.component';  
import { VendaListComponent } from './venda-list/venda-list.component';  
import { AddVendaComponent } from './add-venda/add-venda.component';  
  
const routes: Routes = [  
  { path: '', redirectTo: 'view-cliente', pathMatch: 'full' },  
  { path: 'view-cliente', component: ClienteListComponent },  
  { path: 'add-cliente', component: AddClienteComponent },
  { path: 'view-categoria', component: CategoriaListComponent },  
  { path: 'add-categoria', component: AddCategoriaComponent }, 
  { path: 'view-faq', component: FaqListComponent },  
  { path: 'add-faq', component: AddFaqComponent }, 
  { path: 'view-formaPagamento', component: FormaPagamentoListComponent },  
  { path: 'add-formaPagamento', component: AddFormaPagamentoComponent }, 
  { path: 'view-fornecedor', component: FornecedorListComponent },  
  { path: 'add-fornecedor', component: AddFornecedorComponent }, 
  { path: 'view-itens', component: ItensListComponent },  
  { path: 'add-itens', component: AddItensComponent }, 
  { path: 'view-marca', component: MarcaListComponent },  
  { path: 'add-marca', component: AddMarcaComponent }, 
  { path: 'view-produto', component: ProdutoListComponent },  
  { path: 'add-produto', component: AddProdutoComponent }, 
  { path: 'view-venda', component: VendaListComponent },  
  { path: 'add-venda', component: AddVendaComponent }, 
  
  

];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  