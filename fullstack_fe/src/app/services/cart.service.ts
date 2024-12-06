import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  methodComplete = new EventEmitter<void>();
  constructor(private notificationService: NotifyService) {
    this.methodComplete.subscribe(() => {
      this.notificationService.showNotification('Cart update');
    });
  }

  addToCart(newProd: any): void {
    const cart: string = localStorage.getItem('cart') ?? '[]';
    let listProductCart: any[] = JSON.parse(cart);

    const existsProd = listProductCart
      .flat()
      .some((obj) => obj.id === newProd.id);
    if (existsProd) {
      listProductCart = listProductCart.map((prod) => {
        return prod.id === newProd.id ? { ...prod, quantity: prod.quantity + newProd.quantity}  : prod;
      });
    } else {
      listProductCart.push(newProd);
    }

    const newCart = JSON.stringify(listProductCart);
    
    localStorage.setItem('cart', newCart);
    this.methodComplete.emit();
  }

  getItem(): Product[]{
    const cart: string = localStorage.getItem('cart') || '[]';
    return JSON.parse(cart);
  }

  clearCart(): void{
    localStorage.removeItem('cart');
    this.methodComplete.emit();
  }

  removeItem(id: number): Product[]{
    const prodList: Product[] = this.getItem();

    const newProdList: Product[] = prodList.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newProdList));
    this.methodComplete.emit();
    return newProdList;
  }
}
