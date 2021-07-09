import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CartComponent } from './components/cart/cart.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { ProductListComponent } from './components/product-list/product-list.component'

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'confirm', component: ConfirmationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
