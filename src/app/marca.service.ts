import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class MarcaService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getMarcaList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'marca/listar');  
  }  
  
  createMarca(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'marca/adicionar', cliente);  
  }  
  
  deleteMarca(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}marca/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getMarca(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}marca/procurar/${id}`);  
  }  
  
  updateMarca(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}marca/atualizar/${id}`, value);  
  }  
    
}  
