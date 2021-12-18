import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CartComponent } from './shared/components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private _bottomSheet: MatBottomSheet) {}
  ngOnInit(){
    this.openBottomSheet();
  }
  openBottomSheet(): void {
    this._bottomSheet.open(CartComponent);
  }
}
