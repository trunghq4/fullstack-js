import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: false,

  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  @Input() paymentInformation: any = {
    fullname: '',
    address: '',
    phone: '',
    paymentMethod: 'cash'
  };
  @Output() openPopup = new EventEmitter<void>();
  @Output() trimNameStr = new EventEmitter<void>();
  constructor() {}

  checkout(): void {
    this.openPopup.emit();
  }

  trimName(): void{
    this.trimNameStr.emit();
  }
}
