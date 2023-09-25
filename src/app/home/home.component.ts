import { Component, OnInit } from '@angular/core';
import { SalesType } from '../models/e-commerce/sales';
import { ProductsType } from '../models/inventory-app/products';
import { RevenueType } from '../models/e-commerce/revenue';
import { NewProductsType } from '../models/inventory-app/new-products';
import { ECommerceService } from '../services/ecommerce.service';
import { InventoryAppService } from '../services/inventory-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public inventoryAppNewProducts!: NewProductsType[];
  public eCommerceSales!: SalesType[];
  public eCommerceRevenue!: RevenueType[];

  constructor(
    private inventoryAppService: InventoryAppService,
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.inventoryAppService.getNewProducts().subscribe(data => this.inventoryAppNewProducts = data);
    this.eCommerceService.getSales().subscribe(data => this.eCommerceSales = data);
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
  }
}
