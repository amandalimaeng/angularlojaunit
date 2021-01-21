import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class CategoriaService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getCategoriaList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'categoria/listar');  
  }  
  
  createCategoria(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'categoria/adicionar', cliente);  
  }  
  
  deleteCategoria(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}categoria/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getCategoria(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}categoria/procurar/${id}`);  
  }  
  
  updateCategoria(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}categoria/atualizar/${id}`, value);  
  }  
    
}  
