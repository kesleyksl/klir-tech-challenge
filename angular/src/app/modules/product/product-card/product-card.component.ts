import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product;
  constructor(private readonly cartService: CartService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public addToCart(product: Product){
    this.cartService.addProduct(product);
    this.openSnackBar();    
  }

  private openSnackBar() {
    this._snackBar.open('Product added to cart', undefined, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500
    });
  }
}
