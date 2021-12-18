import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Product } from '../../interfaces/product.interface';
import { promotionList } from '../../mocks/PrommotionsMock';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Product =     {
    "id": 11,
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
    "name": "Product 11",
    "imagePath": "https://picsum.photos/300",
    "price": 5.45,
    "promotion": promotionList[1]
}
  constructor(private _bottomSheetRef: MatBottomSheetRef<CartComponent>) {}

  ngOnInit(): void {
  }

}
