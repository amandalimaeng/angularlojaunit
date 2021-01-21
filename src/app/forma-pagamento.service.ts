import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class FormaPagamentoService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getFormaPagamentoList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'formaPagamento/listar');  
  }  
  
  createFormaPagamento(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'formaPagamento/adicionar', cliente);  
  }  
  
  deleteFormaPagamento(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}formaPagamento/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getFormaPagamento(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}formaPagamento/procurar/${id}`);  
  }  
  
  updateFormaPagamento(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}formaPagamento/atualizar/${id}`, value);  
  }  
    
}  
