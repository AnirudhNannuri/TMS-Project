import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewOrderComponent } from './current-orders/view-order/view-order.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'destinations',
    component: DestinationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'current-orders',
    component: CurrentOrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-order',
    component: ViewOrderComponent
  },
  {
    path: 'vehicle-list',
    component: VehicleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
