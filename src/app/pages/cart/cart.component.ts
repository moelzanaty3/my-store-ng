import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

import { Product } from 'src/app/models'
import { CartListService } from 'src/app/services'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: Product[] = []
  totalPrice: number = 0

  myForm: FormGroup

  constructor(
    private toastr: ToastrService,
    private cartService: CartListService,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      creditCard: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.cartList = this.cartService.get()
    this.totalPrice = this.cartService.getTotalPrice()

    this.myForm.valueChanges.subscribe((formData) => {
      this.cartService.setUserInfo({ ...formData })
    })
  }

  removeProductFromCart(product: Product): void {
    this.cartList = this.cartService.removeProduct(product)
    this.totalPrice = this.cartService.getTotalPrice()
  }

  handleSelectedAmountChange(product: Product): void {
    this.cartService.updateProduct(product)
    this.totalPrice = this.cartService.getTotalPrice()
  }

  checkout(): void {
    if (this.totalPrice === 0) {
      this.toastr.info('Please add Products First', 'Order Cart!', {
        positionClass: 'toast-bottom-right'
      })
      return
    }
    this.router.navigate(['/confirm'])
  }
}
