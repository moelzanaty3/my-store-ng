import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models'
import { ProductsService } from 'src/app/services'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .get()
      .subscribe((products) => {
        this.products = products.map((p) => ({ ...p, selectedAmount: 0 }))
      })
  }
}
