import { Component, Input, OnInit } from '@angular/core';

import { ProductCart } from '../../interfaces/cart-product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() public product: ProductCart;
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }
  
  deleteItems(){
    this.cartService.deleteProduct(this.product.id);
  }
}
