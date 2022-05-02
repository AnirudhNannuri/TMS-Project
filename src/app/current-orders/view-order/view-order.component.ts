import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { OrdersModel } from 'src/app/shared/orders.model';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  @Input() order?: OrdersModel;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentOrder: OrdersModel = {
    name: '',
    destination: '',
    content: '',
    service: '',
    placed: false
  };

  message = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges() {
    this.message = '';
    this.currentOrder = {...this.order};
  }

  updatePlaced(status: boolean) {
    if(this.currentOrder.key) {
      this.orderService.update(this.currentOrder.key, { placed: status })
      .then(() => {
        this.currentOrder.placed = status;
      })
      .catch(err => console.log(err));
    }
  }

  updateOrder() {
    const data = {
      name: this.currentOrder.name,
      from: this.currentOrder.from,
      destination: this.currentOrder.destination,
      service: this.currentOrder.service
    };

    if(this.currentOrder.key) {
      this.orderService.update(this.currentOrder.key, data)
      .then(() => this.message = 'Order updated Successfully!')
      .catch(err => console.log(err));
    }
  }

  deleteOrder() {
    if(this.currentOrder.key) {
      this.orderService.delete(this.currentOrder.key)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The order is deleted.';
      })
      .catch(err => console.log(err));
    }
  }

}
