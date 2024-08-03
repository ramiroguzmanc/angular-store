import {Component, Input, signal} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
	constructor(public cartService: CartService) { }

	toggleCart(){
		this.cartService.toggleShoppingCart()
	}

}
