import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(name: string): any {
    return this.http.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${name}`
    );
  }
}
