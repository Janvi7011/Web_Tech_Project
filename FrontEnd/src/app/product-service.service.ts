import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = "http://localhost:3000/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getProduct(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }


  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
