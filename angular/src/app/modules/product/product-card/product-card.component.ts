import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
