import {Component, signal} from '@angular/core';
import {ProductComponent} from "../../components/product/product.component";
import {Product} from "../../../shared/models/product.model";
import ProductsMockup from "../../../shared/models/products-mockup.json"

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
	products = signal<Product[]>([])

	constructor() {
		this.products.set(ProductsMockup)
	}

	fromChild(ev: string) {
		console.log('Estamos en el padre')
		console.log(ev)
	}

}
