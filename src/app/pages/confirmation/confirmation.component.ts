import { Component, OnInit } from '@angular/core'
import { Product, User } from 'src/app/models'
import { CartListService } from 'src/app/services'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  cart: Product[] = []
  user: User = {
    name: '',
    address: '',
    creditCard: ''
  }
  totalPrice: number = 0

  constructor(private cartService: CartListService) {}

  ngOnInit(): void {
    this.user = this.cartService.getUserInfo()
    this.totalPrice = this.cartService.getTotalPrice()
  }

  ngOnDestroy(): void {
    this.cartService.clear()
  }
}
