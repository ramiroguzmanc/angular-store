import {Component, Input, signal} from '@angular/core';
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
	showShoppingCart: boolean = false

	constructor(public cartService: CartService) {}

	ngOnInit(){
		this.showShoppingCart = this.cartService.showShoppingCart()
	}

	toggleCart(){
		this.cartService.toggleShoppingCart()
	}

}
