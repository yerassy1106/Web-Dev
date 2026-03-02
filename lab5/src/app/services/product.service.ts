import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // --- SMARTPHONES (categoryId: 1) ---
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone 128GB',
      price: 450000,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUqeaAN6MbZs8fSZUtifpz9_12PaCscv-1w&s',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-115225852/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Samsung phone',
      price: 420000,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Gw1LbHCTLzg8t1AEI7JOzUFV_s2xdewoCw&s',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-108869906/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 13',
      description: 'Powerful Xiaomi smartphone',
      price: 300000,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0njr9nOr0P8xvao-yjE4dsPhmrsUp0gGoMw&s',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Realme 11',
      description: 'Affordable smartphone',
      price: 150000,
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0njr9nOr0P8xvao-yjE4dsPhmrsUp0gGoMw&s',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Huawei P60',
      description: 'Premium Huawei phone',
      price: 380000,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0njr9nOr0P8xvao-yjE4dsPhmrsUp0gGoMw&s',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 1
    },

    // --- LAPTOPS (categoryId: 2) ---
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Apple laptop M2 chip',
      price: 750000,
      rating: 4.9,
      image: 'https://apple-store.net.ru/image/cache/wp/gp/tovary/macbook/air-15-m2-2023/apple-macbook-air-15-2023-m2-serebristiy-400x400.webp',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'ASUS TUF Gaming',
      description: 'Gaming laptop',
      price: 650000,
      rating: 4.8,
      image: 'https://age.uz/upload/webp/resize_cache/d23/400_400_1/xchzo5esfeeisdwqiz7m5p9l3fusv2lf.webp',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Lenovo IdeaPad',
      description: 'Work laptop',
      price: 350000,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK2OPcpblAoJqtjcVrtAoF4Rj8b5pXBlLPg&s',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'HP Pavilion',
      description: 'Office laptop',
      price: 400000,
      rating: 4.5,
      image: 'https://monobloki.com/image/cache/catalog/upload/iblock/991/9912f7faafe4d15169831025e575d230-400x400.png',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Acer Aspire',
      description: 'Budget laptop',
      price: 280000,
      rating: 4.4,
      image: 'https://iplaza.kz/image/cache/catalog/product/123/56/product_image_27656_163036-400x400.jpg',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 2
    },

    // --- HEADPHONES (categoryId: 3) ---
    {
      id: 11,
      name: 'AirPods Pro 2',
      description: 'Apple wireless earbuds',
      price: 130000,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHGdXMXIerI-1nWWHcRm7FEo9H1_1HSphQ&s',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Noise cancelling',
      price: 180000,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEEGwpapqJ0cNtWNeK8akVIBMBAnS5y3fNA&s',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 3
    },
    { id: 13, name: 'JBL Tune 760', description: 'Wireless JBL', price: 50000, rating: 4.6, image: 'https://api.technodom.kz/f3/api/v1/images/272/272/naushniki_nakladnye_jbl_bluetooth_tune_760_nc_blue_268167_1.jpg', link: 'https://kaspi.kz/', likes: 0, categoryId: 3 },
    { id: 14, name: 'Samsung Buds 2', description: 'Samsung earbuds', price: 60000, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWj8aPhp_rYMyfQV1uktZFZ9t_PL1-B3-Mog&s', link: 'https://kaspi.kz/', likes: 0, categoryId: 3 },
    { id: 15, name: 'Xiaomi Buds', description: 'Affordable buds', price: 25000, rating: 4.4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmyPFNUr7Z-LfGGxayOu_3iNmW6Ug6TuopA&s', link: 'https://kaspi.kz/', likes: 0, categoryId: 3 },

    // --- TABLETS (categoryId: 4) ---
    { id: 16, name: 'iPad 10', description: 'Apple tablet', price: 350000, rating: 4.8, image: 'https://vrn-store.ru/wp-content/uploads/2022/12/ipad-2022-hero-pink-wifi-select-1181x865-1-500x366.png', link: 'https://kaspi.kz/', likes: 0, categoryId: 4 },
    { id: 17, name: 'Samsung Tab S9', description: 'Samsung tablet', price: 400000, rating: 4.7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuiOixJAOKi-Xx2yI5W8WLImehK1WarTuUw&s', link: 'https://kaspi.kz/', likes: 0, categoryId: 4 },
    { id: 18, name: 'Xiaomi Pad 6', description: 'Android tablet', price: 200000, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBY-zCvgH7jXGOXyoT7WPauab-R-_-sDUfUw&s', link: 'https://kaspi.kz/', likes: 0, categoryId: 4 },
    { id: 19, name: 'Huawei MatePad', description: 'Huawei tablet', price: 220000, rating: 4.5, image: 'https://vrn-store.ru/wp-content/uploads/2022/12/ipad-2022-hero-pink-wifi-select-1181x865-1-500x366.png', link: 'https://kaspi.kz/', likes: 0, categoryId: 4 },
    { id: 20, name: 'Lenovo Tab P11', description: 'Lenovo tablet', price: 180000, rating: 4.4, image: 'https://vrn-store.ru/wp-content/uploads/2022/12/ipad-2022-hero-pink-wifi-select-1181x865-1-500x366.png', link: 'https://kaspi.kz/', likes: 0, categoryId: 4 },
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}