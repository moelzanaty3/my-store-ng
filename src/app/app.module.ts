import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { CartComponent } from './pages/cart/cart.component'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { ProductItemComponent } from './components/product-item/product-item.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddCartSelectComponent } from './components/add-cart-select/add-cart-select.component';
import { ProductCartItemComponent } from './components/product-cart-item/product-cart-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    AddCartSelectComponent,
    ProductCartItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
