import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Apple smartphone with powerful performance and great camera.',
      price: 450000,
      rating: 4.8,
      image: '',
      images: [
        'https://istore.mu/cdn/shop/products/61VByDni_vL._FMwebp.webp?v=1701809185&width=2560',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXflO4fZOyPELqA1NBmzJSelfgRmid79yEUA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYKZogE2ewSpHwxyJNkhZxRJ6dDWRkj1DCQ&s'
      ],
      link: 'https://l.kaspi.kz/shop/CGqo4TGDDD1XU1x'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Android phone with excellent display.',
      price: 420000,
      rating: 4.7,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRKaGbUVzjBEbd9CxAf2IWSbraO2xLQovaA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbLNJ8IHitp-kC585YrDLMWIEBF3KHw2b9w&s',
        'https://www.gizmochina.com/wp-content/uploads/2023/06/FzIlH5_XgAE4RqL-scaled.jpeg?x10805'
      ],
      link: 'https://l.kaspi.kz/shop/6LgDW9D76ce9ZWE'
    },
    {
      id: 3,
      name: 'MacBook Air M1',
      description: 'Lightweight laptop with Apple M1 chip.',
      price: 520000,
      rating: 4.9,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSG1okNtk2OIaHl24IZMLevzMmxvAJIrt4wA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8o-E3p-yTAjxpIQztIfswynyorPrYdZK9Dw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgk5AUzarjU7puCdkzIR-8pjOuU4ijnZFkA&s'
      ],
      link: 'https://l.kaspi.kz/shop/9ZwPvgDcKPTuDkt'
    },
    {
      id: 4,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console.',
      price: 380000,
      rating: 4.9,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1fIuXGqTkZ2EqBvBalPrUSalk8E1z8_I4g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw17AsyynlGxECJahp_EeYTaHzJjvedOtEg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqp-0ONa1BGoQaSLqaRKmOaCO24KAXH3spg&s'
      ],
      link: 'https://l.kaspi.kz/shop/E53Vhw8FjezSb85'
    },
    {
      id: 5,
      name: 'AirPods Pro',
      description: 'Wireless earbuds with noise cancellation.',
      price: 120000,
      rating: 4.7,
      image: '',
      images: [
        'https://m.media-amazon.com/images/I/61sRKTAfrhL.jpg',
        'https://storepods.com.ua/content/uploads/images/sr-naush-3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuOCAhUd3dGBtQB4kmfw2gasibM1CN_ncvg&s'
      ],
      link: 'https://l.kaspi.kz/shop/5kgzZK38GDKsdmU'
    },
    {
      id: 6,
      name: 'Xiaomi TV 55"',
      description: 'Smart TV with 4K resolution.',
      price: 250000,
      rating: 4.6,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_Nd0r1lrrlZAMm-d9GW5Fi4K80qCC1_Otw&s',
        'https://m.media-amazon.com/images/I/71gFmg+ijIL.jpg',
        'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-tv-a2-55/0ca79a1de16b89fd1ad15116cfd7e272.jpg'
      ],
      link: 'https://l.kaspi.kz/shop/8XqWE4Yb7bENbB2'
    },
    {
      id: 7,
      name: 'Dyson Vacuum',
      description: 'Powerful cordless vacuum cleaner.',
      price: 300000,
      rating: 4.8,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikvXLZpMuXjY_XMscq0Y68gwK0h9tAHEcCA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SfEhE7MnJv5ONvgj2gHNf88aMZlrEmurxA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAF2tyq9066fzvDJ2pCZu695l8QbEHnVSdA&s'
      ],
      link: 'https://l.kaspi.kz/shop/4wyPWV8SF7Gw2kh'
    },
    {
      id: 8,
      name: 'Apple Watch',
      description: 'Smart watch with health tracking.',
      price: 180000,
      rating: 4.7,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRWiHChdHF-OhG9pPj1h6Ldl8krVRzs_ZYQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfz0lBPCgXD-Zs_FIfsiY6IV1A6luJJUcj4g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYztZ3VeIJCQUrFSz4bIn0DXvmoRu7MBHVMQ&s'
      ],
      link: 'https://l.kaspi.kz/shop/FbqVt3cFCzo2YXF'
    },
    {
      id: 9,
      name: 'Gaming Chair',
      description: 'Comfortable ergonomic gaming chair.',
      price: 90000,
      rating: 4.5,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xZTkTzwV5IWXG9NnK7jUmaUo8ngUS_MCbg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL14c9fHHfssZ2_PuMuk8lhs3DhjBwuZnZmw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnV8OYenzIMlo-nTTgGTieIbkq7Xabev2vA&s'
      ],
      link: 'https://l.kaspi.kz/shop/7sw2CiBYcneeg5S'
    },
    {
      id: 10,
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard for gaming.',
      price: 60000,
      rating: 4.6,
      image: '',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwaEqaSh6ZF5DRg8auZFqm2teHJssldsmUg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiH3PuDumd-eOpAnVDSOeJ9j4vJurGa59aqg&s',
        'https://zornher.com/cdn/shop/files/ZH980_419a8d7e-bfe4-4309-927d-d4038f0cc710.jpg?v=1755678286&width=2560'
      ],
      link: 'https://l.kaspi.kz/shop/6k75R6okkx7VcSh'
    }
  ];
}
