import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class VendaService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getVendaList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'venda/listar');  
  }  
  
  createVenda(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'venda/adicionar', cliente);  
  }  
  
  deleteVenda(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}venda/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getVenda(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}venda/procurar/${id}`);  
  }  
  
  updateVenda(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}venda/atualizar/${id}`, value);  
  }  
    
}  
