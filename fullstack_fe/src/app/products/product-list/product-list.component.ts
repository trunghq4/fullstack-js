import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: false,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  quantity: number = 1;

  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(data => {
      this.products = data;
    }) ?? [];
  }

  viewProductDetail(id: number): void {
    this.router.navigateByUrl(`/products/${id}`);
  }

  openQuantityPopup(product: Product): void {
    this.selectedProduct = product;
    this.quantity = 1;
  }

  confirmAddToCart(): void {
    const newProd = {...this.selectedProduct, ...{quantity: this.quantity}};
    this.cartService.addToCart(newProd);
    this.closeQuantityPopup();
  }

  closeQuantityPopup(): void {
    this.selectedProduct = null;
  }
}
