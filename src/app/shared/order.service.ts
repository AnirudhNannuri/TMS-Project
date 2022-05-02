import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { OrdersModel } from './orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private dbPath = 'orders';
  ordersRef: AngularFireList<OrdersModel>

  constructor(private db: AngularFireDatabase) {
    this.ordersRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<OrdersModel> {
    return this.ordersRef;
  }   //Get all orders

  create(order: OrdersModel): any {
    return this.ordersRef.push(order);
  }   //Create an order

  update(key: string, value: any): Promise<void> {
    return this.ordersRef.update(key, value);
  }   //Update an order

  delete(key: string): Promise<void> {
    return this.ordersRef.remove(key);
  }   //Delete specific order

  deleteAll(): Promise<void> {
    return this.ordersRef.remove();
  }   //Delete all contents
}
