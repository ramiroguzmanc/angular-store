import { Injectable, signal } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
	providedIn: 'root'
})

export class CartService {
	public showShoppingCart = signal(false);
	public cartTotalValue = signal(0)
	private cartProducts = signal<Product[]>([])


	toggleShoppingCart() {
		this.showShoppingCart.update(prevState => !prevState);
	}

	addProductToCart(product: Product){
		// Check if the product already was added to the cart
		const theProductWasAdded = this.cartProducts().some(cartProduct => cartProduct.id === product.id)
		if(theProductWasAdded) return

		this.cartProducts.update(cartProducts => [...cartProducts, product])
		this.updateCartTotalValue()
	}

	private updateCartTotalValue(){
		this.cartTotalValue.set(this.cartProducts().reduce((total, prod) => total + prod.price, 0))
	}
	get getCartProducts(){
		return this.cartProducts()
	}

}
