import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
 

export class FaqService {  
  
  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getFaqList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'faq/listar');  
  }  
  
  createFaq(cliente: object): Observable<object> {  
    console.log(cliente)
    return this.http.post(`${this.baseUrl}`+'faq/adicionar', cliente);  
  }  
  
  deleteFaq(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}faq/excluir/${id}`, { responseType: 'text' });  
  }  
  
  getFaq(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}faq/procurar/${id}`);  
  }  
  
  updateFaq(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}faq/atualizar/${id}`, value);  
  }  
    
}  
