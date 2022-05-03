import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../shared/order.service';
import { OrdersModel } from '../shared/orders.model';

import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orderForm: FormGroup;
  services = ['Full Truck Load', 'Rail', 'Project Logistics', 'Shipping', 'Warehousing', 'Freight Forwarding', 'Air Cargo'];

  order: OrdersModel = new OrdersModel();
  submitted = false;

  constructor(private orderService: OrderService, public fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.orderService.getAll();
    this.ordersForm();
  }

  ordersForm() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      from: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      content: ['', Validators.required],
      service: ('Full Truck Load')
    });
  }

  get name() {
    return this.orderForm.get('name');
  }
  get from() {
    return this.orderForm.get('from');
  }
  get destination() {
    return this.orderForm.get('destination');
  }
  get content() {
    return this.orderForm.get('content');
  }
  get service() {
    return this.orderForm.get('service');
  }

  saveOrder() {
    this.orderService.create(this.orderForm.value);
    this.toastr.success(
      this.orderForm.controls['content'].value + ' successfully added!'
    );
    this.resetForm();
    this.submitted = true;
  }

  resetForm() {
    this.orderForm.reset();
  }

  newOrder() {
    this.submitted = false;
    this.order = new OrdersModel();
  }

  // onSubmit() {
  //   console.log(this.dataForm);
  //   this.dataForm.reset();
  // }

}
