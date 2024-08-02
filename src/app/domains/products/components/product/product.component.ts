import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {Product} from "../../../shared/models/product.model";

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
  // @Input({required: true}) img: string = ''
	// @Input({required: true}) price: number = 0
	// @Input({required: true}) title: string = ''
	@Input({required: true}) product!: Product

	@Output() addToCart = new EventEmitter<string>()

	addToCartHandler() {
		console.log('Click desde el child')
		this.addToCart.emit('Hola, este es el emit desde el child')
	}
}
