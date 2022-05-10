import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { VehicleList } from './interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private vehiclePath = 'vehicles';
  vehiclesRef: AngularFireList<VehicleList>;

  constructor(private db: AngularFireDatabase) {
    this.vehiclesRef = db.list(this.vehiclePath);
  }

  getAll(): AngularFireList<VehicleList> {
    return this.vehiclesRef;
  }   //Get all orders

  create(vehicle: VehicleList): any {
    return this.vehiclesRef.push(vehicle);
  }   //Create an order

  update(key: string, value: any): Promise<void> {
    return this.vehiclesRef.update(key, value);
  }   //Update an order

  delete(key: string): Promise<void> {
    return this.vehiclesRef.remove(key);
  }   //Delete specific order

  deleteAll(): Promise<void> {
    return this.vehiclesRef.remove();
  }   //Delete all contents
}
