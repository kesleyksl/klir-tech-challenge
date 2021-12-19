import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CartService } from './services/cart.service';
import { CartTotalPriceComponent } from './components/cart-total-price/cart-total-price.component';
import { AlterProductQuantityComponent } from './components/alter-product-quantity/alter-product-quantity.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    TruncatePipe,
    CartComponent,
    CartIconComponent,
    CartItemComponent,
    CartTotalPriceComponent,
    AlterProductQuantityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    HomeComponent,
    NavMenuComponent,
    TruncatePipe,
    CartIconComponent
  ],
  providers: [
    CartService
  ]
})
export class SharedModule { }
