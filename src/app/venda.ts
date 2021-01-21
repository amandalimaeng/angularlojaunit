import { Cliente } from "./cliente";
import { FormaPagamento } from "./forma-pagamento";

export class Venda {
    cliente: Cliente;
    datahora:Date;
    formaPagamento: FormaPagamento;
    valorTotal:number;
    id:number;

}
