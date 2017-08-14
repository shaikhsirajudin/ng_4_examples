import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({selector: 'inventory-app', templateUrl: './inventory-app.component.html', styleUrls: ['./inventory-app.component.css']})
export class InventoryAppComponent implements OnInit {

  products : Product[];
  constructor() {
    this.products = [
      new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', [
        'Men', 'Accessories', 'Hats'
      ], 29.99),
      new Product('Friend', 'A Nice Black Hat1', '/resources/images/products/black-hat.jpg', [
        'Female', 'Accessories', 'Hats'
      ], 20.00)
    ];

  }
  productWasSelected(product : Product) : void {
    console.log('Product clicked: ', product);
  }
  ngOnInit() {}

}
