import { Injectable } from '@angular/core'
import { Product, User } from '../models'

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  cart: Product[] = []
  user: User = {
    name: '',
    address: '',
    creditCard: ''
  }

  constructor() {}

  // user methods
  getUserInfo(): User {
    return this.user
  }

  setUserInfo(user: User) {
    this.user = user
  }

  // cart methods
  get(): Product[] {
    return this.cart
  }

  addProduct(product: Product): void {
    this.cart.push(product)
  }

  removeProduct(product: Product): Product[] {
    this.cart = this.cart.filter((p) => p.id !== product.id)
    return this.cart
  }

  clear(): Product[] {
    this.cart = []
    return this.cart
  }

  updateProduct(product: Product): void {
    const oldProducts = this.cart.filter((p) => p.id !== product.id)
    this.cart = [...oldProducts, product]
  }

  getTotalPrice(): number {
    console.log(this.cart)
    return this.cart.reduce(
      (acc, currentProduct) => acc + currentProduct.price * Number(currentProduct.selectedAmount),
      0
    )
  }
}
