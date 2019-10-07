import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(private cartService: CartService) { }
  roles;
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.cartService.getRoll().subscribe(
      (data: any) =>  {
        console.log('ajaja');
        console.log(data);
        this.roles = data;
      },
       error => {
        console.log(error);
      }
    );
  }

}
