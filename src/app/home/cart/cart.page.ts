import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonToolbar, IonTitle, IonHeader, ]
})
export class CartPage implements OnInit {

  previous!: string;
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.checkUrl();
  }

  checkUrl(){
    const route_url = this.router.url;
    const urlParts = route_url.split('/');
    urlParts.pop();
    console.log(urlParts);
    this.previous = urlParts.join('/');
    console.log('url: ', this.previous);
  }
}
