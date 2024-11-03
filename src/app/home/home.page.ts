import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonRow,
  IonIcon,
  IonThumbnail,
  IonImg,
  IonCard,
  IonLabel,
  IonText,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonBadge,
  IonMenuButton
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonBadge,
    IonButton,
    IonButtons,
    IonSearchbar,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCol,
    IonRow,
    IonIcon,
    IonThumbnail,
    IonImg,
    IonCard,
    IonLabel,
    IonText,
    IonMenuButton,
    RouterLink,
    DecimalPipe,
  ],
})
export class HomePage implements OnInit, OnDestroy {
  items: any[] = [];
  allItems: any[] = [];
  server!: string;
  query!: string;
  totalItems = 0;
  cartSub!: Subscription;
  private api = inject(ApiService);
  public cartService = inject(CartService);

  constructor() {}

  ngOnInit() {
    console.log('ngoninit homepage');
    this.getItems();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      },
    });
  }

  async getItems() {
    try {
     const data: any = await this.api.getCosmetics();
     console.log(data);
     if(data) {
      this.allItems = data?.data;
      this.server = data?.server_base_url;
     }
      this.items = [...this.allItems]; 
    }catch(e) {
      console.log(e);
    }
    
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);

    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  async searchItems() {
    // this.items = this.api.items.filter((item) =>
    //   item.name.toLowerCase().includes(this.query)
    // );
    try {
      const data: any = await this.api.searchCosmetics(this.query);
      console.log(data);
      if(data) {
        this.server = data?.server_base_url;
        this.items = data?.data;
      }
    } catch(e) {
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }
}
