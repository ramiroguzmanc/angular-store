import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	showShoppingCart = signal(false);

	toggleShoppingCart() {
		this.showShoppingCart.update(prevState => !prevState);
	}
}
