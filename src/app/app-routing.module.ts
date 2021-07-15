import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CartComponent } from './pages/cart/cart.component'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { ProductListComponent } from './pages/product-list/product-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmationComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
