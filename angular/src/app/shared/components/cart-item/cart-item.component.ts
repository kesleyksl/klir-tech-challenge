import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() public product: Product;
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }
  
  deleteItems(){
    this.cartService.deleteProduct(this.product.id);
  }
}
