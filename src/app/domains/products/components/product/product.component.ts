import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) img: string = ''
	@Input({required: true}) price: number = 0
	@Input({required: true}) title: string = ''

	@Output() addToCart = new EventEmitter<string>()

	addToCartHandler() {
		console.log('Click desde el child')
		this.addToCart.emit('Hola, este es el emit desde el child')
	}
}
