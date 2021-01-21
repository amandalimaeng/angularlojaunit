import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class ClienteService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getClienteList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'clientes/listar');  
  }  
  
  createCliente(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'clientes/adicionar', cliente);  
  }  
  
  deleteCliente(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}clientes/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getCliente(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}clientes/procurar/${id}`);  
  }  
  
  updateCliente(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}clientes/atualizar/${id}`, value);  
  }  
    
}  
