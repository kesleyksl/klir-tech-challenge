import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from './services/product.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
