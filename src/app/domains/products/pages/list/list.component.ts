import {Component, inject, signal} from '@angular/core';
import {ProductComponent} from "@products/components/product/product.component";
import {Product} from "@shared/models/product.model";
import {ProductService} from "@shared/services/product.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
	private productsService = inject(ProductService)
	products = signal<Product[]>([])

	ngOnInit(){
		this.productsService.getProducts()
			.subscribe({
				next: (products) => {
					this.products.set(products)
				},
				error: () => {

				}
			})
	}

	fromChild(ev: string) {
		console.log('Estamos en el padre')
		console.log(ev)
	}

}
