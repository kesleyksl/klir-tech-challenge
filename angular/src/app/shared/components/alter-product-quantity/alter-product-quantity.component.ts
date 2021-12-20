import { Component, Input, OnInit } from '@angular/core';

import { ProductCart } from '../../interfaces/cart-product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-alter-product-quantity',
  templateUrl: './alter-product-quantity.component.html',
  styleUrls: ['./alter-product-quantity.component.css']
})
export class AlterProductQuantityComponent implements OnInit {
  @Input() public product: ProductCart;

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }
  public removeProduct() {
    this.cartService.removeProduct(this.product);
  }
  
  public addProduct(){
    this.cartService.addProduct(this.product);

  }
}
