import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(name: string): any {
    return this.http.get(`${environment.URL_BASE}/api/items?query=${name}`);
  }

  getDetailProduct(id: string): any {
    return this.http.get(`${environment.URL_BASE}/api/items/${id}`);
  }
}
