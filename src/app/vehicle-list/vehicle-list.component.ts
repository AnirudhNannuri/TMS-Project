import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { VehicleList } from '../shared/interface';
import { VehiclesService } from '../shared/vehicles.service';
import { map, Subject} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})


export class VehicleListComponent implements OnInit{

  vehicles: VehicleList[];
  currentVehicle: VehicleList;
  currentIndex = -1;
  title='';
  panelOpenState = false;
  message: string ='';

  constructor(public dialog: MatDialog,
    private service: VehiclesService, private db: AngularFireDatabase) {
    }

  ngOnInit() {
    this.retrieveVehicles();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height: '500px'
    });
  }

  refreshList() {
    this.currentVehicle = undefined;
    this.currentIndex = -1;
    this.retrieveVehicles();
  }

  retrieveVehicles() {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })))
    ).subscribe(data => {
      this.vehicles = data
    })
  }

  updateVehicle() {
    const data = {
      vehicleNumber: this.currentVehicle.vehicleNumber,
      chassisNumber: this.currentVehicle.chassisNumber,
      modelNo: this.currentVehicle.modelNo,
      vehicleType: this.currentVehicle.vehicleType
    };

    if(this.currentVehicle.key) {
      this.service.update(this.currentVehicle.key, data)
      .then(() => this.message = 'Order updated Successfully!')
      .catch(err => console.log(err));
    }
  }

  deleteVehicle() {
    if(this.currentVehicle.key) {
      this.service.delete(this.currentVehicle.key)
      .then(() => {
        this.refreshList();
        this.message = 'The order is deleted.';
      })
      .catch(err => console.log(err));
    }
  }

  removeAllVehicles() {
    this.service.deleteAll().then(() => this.refreshList()).catch(err => console.log(err)
    );
  }
}
