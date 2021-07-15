import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Product } from 'src/app/models'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    name: '',
    price: 0,
    url: '',
    description: '',
    category: '',
    selectedAmount: 0
  }
  currentPath: string

  constructor(private router: Router) {
    this.currentPath = this.router.url
  }

  ngOnInit(): void {}
}
