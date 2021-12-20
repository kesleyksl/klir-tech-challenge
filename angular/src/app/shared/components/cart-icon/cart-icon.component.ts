import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  public count$: Observable<number>;
  constructor(private readonly cartService: CartService) {
    this.count$ = this.cartService.cartItemsCount();
   }

  ngOnInit(): void {
  }

  public openCart() {
    this.cartService.openCart();
  }


}
