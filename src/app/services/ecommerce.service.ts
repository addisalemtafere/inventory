import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RevenueType } from '../models/e-commerce/revenue';
import { SalesType } from '../models/e-commerce/sales';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  constructor(
    private http: HttpClient
  ) { }

  public getSales(): Observable<SalesType[]> {
    return this.http.get<SalesType[]>("https://excel2json.io/api/share/f9942c71-b172-4060-4381-08da496bf5f2");
  }

  public getRevenue(): Observable<RevenueType[]> {
    return this.http.get<RevenueType[]>("https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2");
  }
}
