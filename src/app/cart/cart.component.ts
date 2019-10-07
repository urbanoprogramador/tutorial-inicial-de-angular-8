import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Array<any>;
  checkoutForm;
  total;
  constructor(private cartService: CartService , private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''});
    this.total = this.items.reduce((old , current) => {
        console.log(old);
        console.log(current);
        return {price: old.price + current.price};
      });
    console.log( this.total );
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    window.alert('hola ' + customerData.name + ' ' + 'el pedido sera enviado a ' + customerData.address );

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  quitar(iditem) {
    this.cartService.quitar(iditem);
  }
}
