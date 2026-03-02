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

  // ВАЖНОЕ ИЗМЕНЕНИЕ: Используем декоратор @Input и OnChanges
  // Это позволит нам создать ЛОКАЛЬНЫЙ изменяемый сигнал.
  @Input({required: true}) initialProducts: Product[] = [];

  // Это наш локальный, изменяемый сигнал со списком продуктов
  products: WritableSignal<Product[]> = signal([]);

  // Когда AppComponent передает новый список (выбрана категория)
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialProducts']) {
      // Обновляем наш локальный сигнал новыми данными
      this.products.set(this.initialProducts);
    }
  }

  // Теперь эта функция будет работать!
  removeProduct(id: number) {
    // Мы обновляем ЛОКАЛЬНЫЙ сигнал, не изменяя input.
    this.products.update(prevProducts => prevProducts.filter(p => p.id !== id));
  }
}