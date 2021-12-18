import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartComponent } from '../components/cart/cart.component';
import { PromotionEnum } from '../enums/promotion-enum';

import { Product } from '../interfaces/product.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey: string = 'cart';
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private cartCountItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private storage: StorageService, 
              private _bottomSheet: MatBottomSheet) { }

  getCart():Observable<Product[]> {
    let storageCart: any = this.storage.getItem(this.cartKey);
    this.updateCart(storageCart && Array.isArray(storageCart) ? storageCart : []);
    return this.cart.asObservable();
  }

  addProduct(product: Product): void {
    if (!this.existsProduct(product.id)) {
      this.cart.value.push(product);
    }
    this.updateItem(product);
    this.updateCart(this.cart.value);
  }

  cartItemsCount(): Observable<number> {
    return this.cartCountItems.asObservable();
  }

  cartTotalPrice(): Observable<number>{
    return this.cartTotal.asObservable();
  }

  deleteProduct(id: number): void{
    const index = this.cart.value.findIndex(p => p.id === id);
    this.cart.value.splice(index, 1);
    this.updateCart(this.cart.value);
  }

  openCart(): void {
    this._bottomSheet.open(CartComponent,
      {
        closeOnNavigation: true,
        disableClose: false,
      });
  }

  private existsProduct(id: number): boolean {
    return !!this.cart.value.find(p => p.id === id);
  }

  private updateCart(products: Product[]): void {
    this.cart.next(products);
    this.storage.setItem(this.cartKey, this.cart.value);
    this.cartCountItems.next(this.countItems());
    this.cartTotal.next(this.calculateTotal());
  }

  private countItems():number {
    let count = 0;
    this.cart.value.forEach((p)=>{
      count += p.count;
    });
    return count
  }

  private calculateTotal(): number {
    let total = 0;
    this.cart.value.forEach((p)=>{
      total += p.total;
    });
    return total;
  }

  private updateItem(product: Product): void {
    const index = this.cart.value.findIndex(p => p.id === product.id);
    if (index >= 0) {
      this.updateItemCount(index);
      this.updateItemTotal(index);
    }
  }

  private updateItemCount(index: number): void {
    this.cart.value[index].count++;
  }

  private updateItemTotal(index: number): void {
    const item = this.cart.value[index];
    if (!item.promotion) {
      item.total = item.price * item.count;
      this.updateItemInPosition(index, item);
      return;
    }
    if (this.activePromotion(item)) {
      if (item.promotion.id === PromotionEnum.GET_ONE_FREE) {
        item.total = this.getFree(item);
      }
      if (item.promotion.id === PromotionEnum.THREE_FOR_TEN) {
        item.total = this.getForTen(item);
      }
    }
    else {
      item.total = item.price * item.count;
    }
    this.updateItemInPosition(index, item);
  }

  private activePromotion(item: Product): boolean{
    return item.promotion? item.count >= item.promotion.minimalQuantity:false;
  }

  private updateItemInPosition(index: number, item: Product): void{
    this.cart.value[index] = item;
  }

  private getFree(product: Product): number {
    if (!product.promotion)
      return 0;
    if (product.count % product?.promotion?.minimalQuantity === 0) {
      return (product.price * product.count) / product?.promotion?.minimalQuantity;
    } else {
      return ((product.price * (product.count - 1)) / product?.promotion?.minimalQuantity) + product.price;
    }
  }

  private getForTen(product: Product): number {
    if (!product.promotion)
      return 0;

    if (product.count % product?.promotion?.minimalQuantity === 0) {
      return (product.count / product?.promotion?.minimalQuantity) * 10;
    } else {
      return ((Math.floor(product.count / product?.promotion?.minimalQuantity) * 10) + ((product.count % product?.promotion?.minimalQuantity) * product.price));
    }
  }
}
