import { Cliente } from "./cliente";
import { FormaPagamento } from "./forma-pagamento";
import { Fornecedor } from "./fornecedor";
import { Marca } from "./marca";
import { Produto } from "./produto";

export class Itens {
    id: number;
    produto:Produto;
    fornecedor: Fornecedor;
    marca:Marca;
    cliente:Cliente;
    
  
  
 
}

