import { Component, OnInit } from '@angular/core';
import { OrdersType } from '../models/northwind/orders';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public northwindOrders!: OrdersType[];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('OrdersType').subscribe(data => this.northwindOrders = data);
  }
}
