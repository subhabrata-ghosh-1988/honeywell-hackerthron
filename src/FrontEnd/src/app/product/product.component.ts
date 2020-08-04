import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  protected url = 'https://localhost:44342/api/products';
  public products: Product[] = [];
  constructor(protected httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<Product[]>(this.url)
      .subscribe(products => (this.products = products));
  }
}
