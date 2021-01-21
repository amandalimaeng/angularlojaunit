import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class FornecedorService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getFornecedorList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'fornecedor/listar');  
  }  
  
  createFornecedor(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'fornecedor/adicionar', cliente);  
  }  
  
  deleteFornecedor(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}fornecedor/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getFornecedor(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}fornecedor/procurar/${id}`);  
  }  
  
  updateFornecedor(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}fornecedor/atualizar/${id}`, value);  
  }  
    
}  
