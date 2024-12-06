import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';



@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
