import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
// modelo

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  URI_PRODUCTS = "http://localhost:5000/api/products"
  currentProduct: Product
  products: any

  constructor(public http: HttpClient) {
    this.currentProduct = new Product()
  }

  getProducts(){
    return this.http.get(`${this.URI_PRODUCTS}/get-all`)
  }

  createProduct(data: any){
    return this.http.post(`${this.URI_PRODUCTS}/create`, data)
  }

  updateProduct(id: string, data: any){
    return this.http.put(`${this.URI_PRODUCTS}/update/${id}`, data)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.URI_PRODUCTS}/delete/${id}`)
  }

}
