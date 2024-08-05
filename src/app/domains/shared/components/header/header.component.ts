import {Component, inject, signal} from '@angular/core';
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
	imports: [
		CartComponent
	],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
	private cartService = inject(CartService)
	cartProducts = this.cartService.cartProducts

	toggleCart(){
		this.cartService.toggleShoppingCart()
	}


}
