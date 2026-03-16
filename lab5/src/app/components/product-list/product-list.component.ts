import { Component, input, signal, WritableSignal, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input({required: true}) initialProducts: Product[] = [];

  
  products: WritableSignal<Product[]> = signal([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialProducts']) {
      this.products.set(this.initialProducts);
    }
  }

  
  removeProduct(id: number) {
    this.products.update(prevProducts => prevProducts.filter(p => p.id !== id));
  }
}