import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Product } from 'src/app/models'
import { CartListService } from 'src/app/services'

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.scss']
})
export class ProductCartItemComponent implements OnInit {
  @Input() product: Product = {
    name: '',
    price: 0,
    url: '',
    description: '',
    category: '',
    selectedAmount: 0
  }
  @Output() removeItem: EventEmitter<Product> = new EventEmitter()
  @Output() selectedAmountChange: EventEmitter<Product> = new EventEmitter()

  myForm: FormGroup

  constructor(private cartService: CartListService) {
    this.myForm = new FormGroup({
      selectedAmount: new FormControl(this.product.selectedAmount)
    })
  }

  ngOnInit(): void {
    this.myForm.get('selectedAmount')?.setValue(this.product.selectedAmount)
    this.myForm.valueChanges.subscribe((formData) => {
      this.selectedAmountChange.emit({ ...this.product, selectedAmount: formData.selectedAmount })
    })
  }

  removeProductFromCart(product: Product): void {
    this.removeItem.emit(product)
  }
}
