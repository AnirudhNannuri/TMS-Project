import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { OrderService } from '../shared/order.service';
import { OrdersModel } from '../shared/orders.model';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {

  orders: OrdersModel[];
  currentOrder: OrdersModel;
  currentIndex = -1;
  title='';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.retrieveOrders();
  }

  refreshList() {
    this.currentOrder = undefined;
    this.currentIndex = -1;
    this.retrieveOrders();
  }

  retrieveOrders() {
    this.orderService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.orders = data;
    });
  }

  setActiveOrder(order: OrdersModel, index: number) {
    this.currentOrder = order;
    this.currentIndex = index;
  }

  removeAllOrders() {
    this.orderService.deleteAll()
    .then(() => this.refreshList())
    .catch(err => console.log(err));
  }

}
