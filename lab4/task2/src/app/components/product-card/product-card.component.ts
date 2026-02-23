import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product = input<Product>();
  currentImageIndex = 0;

  nextImage() {
    const images = this.product()?.images || [];
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
  }

  prevImage() {
    const images = this.product()?.images || [];
    this.currentImageIndex =
      (this.currentImageIndex - 1 + images.length) % images.length;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product()!.link);
    window.open(
      `https://wa.me/?text=Check this product: ${url}`,
      '_blank'
    );
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product()!.link);
    const text = encodeURIComponent(this.product()!.name);
    window.open(
      `https://t.me/share/url?url=${url}&text=${text}`,
      '_blank'
    );
  }
}