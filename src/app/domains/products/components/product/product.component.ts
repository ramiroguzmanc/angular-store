import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {Product} from "../../../shared/models/product.model";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-product',
  standalone: true,
	imports: [
		NgOptimizedImage,
		DatePipe
	],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
	@Input({required: true}) product!: Product

	constructor(public cartService: CartService) {
	}

	// @Output() addToCart = new EventEmitter<string>()

	addToCartHandler(product: Product) {
		// console.log('Click desde el child')
		// this.addToCart.emit('Hola, este es el emit desde el child')
		this.cartService.addProductToCart(product)
	}
}
