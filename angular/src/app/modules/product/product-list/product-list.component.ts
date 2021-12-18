import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Product } from '../../../shared/interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products:Product[]= [];
  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.productService
        .getProducts()
        .pipe(
          take(1)
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
}
