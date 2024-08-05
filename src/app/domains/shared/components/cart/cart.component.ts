import {Component, inject, Input, signal} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
	imports: [
		CurrencyPipe,
		NgOptimizedImage
	],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
	private cartService = inject(CartService)
	showShoppingCart = this.cartService.showShoppingCart
	products = this.cartService.cartProducts
	totalPrice = this.cartService.cartTotalPrice

	toggleCart(){
		this.cartService.toggleShoppingCart()
	}

}
