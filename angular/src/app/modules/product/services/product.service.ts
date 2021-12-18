import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PromotionEnum } from 'src/app/shared/enums/promotion-enum';
import { Promotion } from 'src/app/shared/interfaces/promotion.interface';
import { productMock } from 'src/app/shared/mocks/ProductsMock';
import { Product } from '../../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[] = productMock;
 
  public getProducts(): Observable<Product[]>{
    return of(this.productList);
  }

}

