import { Component } from '@angular/core';
import { take } from 'rxjs';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private readonly cartService: CartService){
    this.cartService.getCart().pipe(take(1)).subscribe();
  }

}
