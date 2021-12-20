import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ProductCart } from '../../interfaces/cart-product.interface';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private destroy$: Subject<any> = new Subject<any>();
  public products: ProductCart[] = [];
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
        .getCart()
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe(
          (products) =>{
            this.products = products;
          }
        )
  }
  public trackByFn(index: number, item: Product) {
    return item.id;
  }
  public close(){
    this.cartService.closeCart();
  }
  ngOnDestroy(){
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
