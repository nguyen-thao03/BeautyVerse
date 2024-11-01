import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Nước hoa hồng Klairs',
      price: 204000,
      status: true,
      rating: 4.9,
      cover: 'assets/cosmetics/nuoc-hoa-hong-klairs.png',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Nước tẩy trang LOreal tươi mát cho da dầu',
      price: 149000,
      status: true,
      rating: 4.7,
      cover: 'assets/cosmetics/nuoc-tay-trang-loreal.png',
      description: 'Indulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'
    },
    {
      id: '3',
      name: 'Kem chống nắng Skin1004 cho da nhạy cảm',
      price: 214000,
      status: true,
      rating: 4.9,
      cover: 'assets/cosmetics/kem-chong-nang-skin1004.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'
    },
    {
      id: '4',
      name: 'Kem chống nắng La Roche-Posay kiểm soát dầu',
      price: 377000,
      status: true,
      rating: 4.8,
      cover: 'assets/cosmetics/kem-chong-nang-la-roche-posay.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '5',
      name: 'Sữa rửa mặt CeraVe sạch sâu cho da thường đến da dầu',
      price: 355000,
      status: true,
      rating: 4.8,
      cover: 'assets/cosmetics/sua-rua-mat-cerave.png',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '6',
      name: 'Gel rửa mặt Cosrx tràm trà',
      price: 116000,
      status: true,
      rating: 4.8,
      cover: 'assets/cosmetics/gel-rua-mat-cosrx.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '7',
      name: 'Kem dưỡng',
      price: 116000,
      status: true,
      rating: 4.8,
      cover: 'assets/cosmetics/kem-chong-nang-la-roche-posay.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
  ];

  coupons: any[] = [
    {
      id: "1",
      code: "SAVE10",
      discount: 10,
      isPercentage: true,
      description: "Get 10% off on your order",
      isActive: true,
      expiryDate: "2024-10-30",
      minimumOrderAmount: 50,
    },
    {
      id: "2",
      code: "FREESHIP",
      discount: 50,
      isPercentage: false,
      description: "Flat 50 bucks off on all orders",
      isActive: true,
      expiryDate: "2024-12-31",
    },
    {
      id: "3",
      code: "BUNDLEDEAL",
      discount: 20,
      isPercentage: true,
      description: "Buy one get one 50% off",
      isActive: false,
      expiryDate: "2024-09-15",
    },
    {
      id: "4",
      code: "GIFTSHOP",
      discount: 30,
      isPercentage: true,
      description: "Get 30% off on orders above 5000",
      isActive: true,
      expiryDate: "2024-12-31",
      minimumOrderAmount: 5000,
    },
  ];

  constructor() { }

  getCoupons() {
    return this.coupons.filter(coupon => coupon.isActive);
  }
}