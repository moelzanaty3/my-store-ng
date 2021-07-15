import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'

import { CartListService } from 'src/app/services'
import { Product } from 'src/app/models'

@Component({
  selector: 'app-add-cart-select',
  templateUrl: './add-cart-select.component.html',
  styleUrls: ['./add-cart-select.component.scss']
})
export class AddCartSelectComponent implements OnInit {
  @Input() product: Product = {
    name: '',
    price: 0,
    url: '',
    description: '',
    category: '',
    selectedAmount: 0
  }

  myForm: FormGroup

  constructor(private cartService: CartListService, private toastr: ToastrService) {
    this.myForm = new FormGroup({
      selectedAmount: new FormControl(0)
    })
  }

  ngOnInit(): void {}

  addToCart(product: Product): void {
    product.selectedAmount = this.getSelectedAmount()
    this.cartService.addProduct(product)
    this.toastr.info(`Order with name ${product.name} added!`, 'Order Added!', {
      positionClass: 'toast-bottom-right'
    })
  }

  getSelectedAmount(): number {
    return +this.myForm.get('selectedAmount')?.value || 0
  }
}
