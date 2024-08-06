import {Component, inject} from '@angular/core';
import {CartService} from "@shared/services/cart.service";
import {CartComponent} from "@shared/components/cart/cart.component";

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
