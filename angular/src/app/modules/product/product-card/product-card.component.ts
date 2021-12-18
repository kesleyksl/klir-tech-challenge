import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product;
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }

  public addToCart(product: Product){
    this.cartService.addProduct(product);
    this.cartService.openCart();    
  }
}
