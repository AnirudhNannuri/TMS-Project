import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { ViewOrderComponent } from './current-orders/view-order/view-order.component';
import { OrdersComponent } from './orders/orders.component';
import { LoadingSpinnerComponent } from './shared/loadingspinner/loading-spinner.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './home/home.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core'

import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';



import { DataService } from './shared/data.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    DestinationsComponent,
    CurrentOrdersComponent,
    ViewOrderComponent,
    OrdersComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    HomeComponent,
    SearchBarComponent,
    DialogComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: "Add your own API key."
    }),
    HttpModule,
    MatInputModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
