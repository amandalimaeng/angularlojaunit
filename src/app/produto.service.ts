import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class ProdutoService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getProdutoList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'produto/listar');  
  }  
  
  createProduto(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'produto/adicionar', cliente);  
  }  
  
  deleteProduto(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}produto/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getProduto(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}produto/procurar/${id}`);  
  }  
  
  updateProduto(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}produto/atualizar/${id}`, value);  
  }  
    
}  
