import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProductsType } from '../models/inventory-app/new-products';
import { ProductsType } from '../models/inventory-app/products';

@Injectable({
  providedIn: 'root'
})
export class InventoryAppService {
  constructor(
    private http: HttpClient
  ) { }

  public getNewProducts(): Observable<NewProductsType[]> {
    return this.http.get<NewProductsType[]>("https://excel2json.io/api/share/4b54e7f8-927a-4a38-e690-08dab79fa5b4");
  }

  public getProducts(): Observable<ProductsType[]> {
    return this.http.get<ProductsType[]>("https://excel2json.io/api/share/22b3aaa8-bba3-43cb-e68f-08dab79fa5b4");
  }
}
