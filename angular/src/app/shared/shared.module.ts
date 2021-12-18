import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    TruncatePipe,
    CartComponent,
    CartIconComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
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
