import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(name: string): Observable<any> {
    return this.http.get(`${environment.URL_BASE}/api/items?query=${name}`);
  }

  getDetailProduct(id: string): Observable<any> {
    return this.http.get(`${environment.URL_BASE}/api/items/${id}`);
  }
}
