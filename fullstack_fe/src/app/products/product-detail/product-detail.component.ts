import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: false,
})
export class ProductDetailComponent implements OnInit {
  product: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProductDetails(productId);
    }
  }

  fetchProductDetails(productId: string): void {
    this.http.get<Product[]>('/data.json').subscribe({
      next: (response) => {
        const products = response ?? [];
        this.product = products.filter(prod => prod.id === Number(productId))[0];
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      },
    });
  }

  addToCart(product: any, quantity: number): void {
    const newProd = {...product, ...{quantity}};
    this.cartService.addToCart(newProd);
    this.router.navigateByUrl(`/cart`);
  }
}
