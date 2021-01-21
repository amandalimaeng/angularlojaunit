import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class ItensService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getItensList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'itens/listar');  
  }  
  
  createItens(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'itens/adicionar', cliente);  
  }  
  
  deleteItens(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}itens/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getItens(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}itens/procurar/${id}`);  
  }  
  
  updateItens(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}itens/atualizar/${id}`, value);  
  }  
    
}  
