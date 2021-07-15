import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models'
import { ProductsService } from 'src/app/services'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
    url: '',
    description: '',
    category: '',
    selectedAmount: 0
  }
  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.product.id = +params.id
    })
    if (this.product.id)
      this.productService.getById(this.product.id).subscribe((product) => {
        this.product = product
      })
  }
}
