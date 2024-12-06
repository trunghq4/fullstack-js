import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [];
  total: number = 0;
  showCheckout: boolean = false;
  showConfirmation: boolean = false;
  paymentInformation: any = {
    fullname: '',
    address: '',
    phone: '',
    paymentMethod: 'cash'
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.getListProduct();
    this.total = this.getTotalPrice();
  }

  getListProduct(): Product[] {
    return this.cartService.getItem();
  }

  getTotalPrice(): number {
    return parseFloat(
      this.products
        .reduce(
          (sum, item) => sum + Number(item.price) * Number(item.quantity),
          0
        )
        .toFixed(2)
    );
  }

  viewProductDetail(id: number): void{
    this.router.navigateByUrl(`/products/${id}`);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.router.navigateByUrl(`/`);
  }

  removeFromCart(id: number): void {
    this.products = this.cartService.removeItem(id);
  }

  checkout(): void {
    this.showCheckout = !this.showCheckout;
  }

  openConfirmPopup(): void{
    this.showConfirmation = true;
  }

  closeConfirmPopup(): void{
    this.showConfirmation = false;
    this.cartService.clearCart();
    this.router.navigateByUrl('/');
  }

  trimName(): void{
    this.paymentInformation.fullname = this.paymentInformation.fullname.trim();
    console.log(this.paymentInformation);
    
  }
}
