import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-total-price',
  templateUrl: './cart-total-price.component.html',
  styleUrls: ['./cart-total-price.component.css']
})
export class CartTotalPriceComponent implements OnInit {
  public total$: Observable<number>;
  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cartTotalPrice();
   }

  ngOnInit(): void {
  }

}
