import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'cart',
        loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'cosmetics/:id',
        children: [
          {
            path:'',
            loadComponent: () => import('./home/item-detail/item-detail.page').then( m => m.ItemDetailPage)
          },
          {
            path: 'cart',
            children: [
              {
                path: '',
                loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
              },
              {
                path: 'payment-option',
                loadComponent: () => import('./home/cart/payment-option/payment-option.page').then( m => m.PaymentOptionPage)
              },

            ]
            
          },
        ],
        
      },
    ],
    canMatch: [ async () => await inject(AuthService).authGuard()],
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
      },
      {
        path: 'signup',
        loadComponent: () => import('./login/signup/signup.page').then( m => m.SignupPage)
      },
    ],
    
  },
  {
    path: 'orders',
    loadComponent: () => import('./home/orders/orders.page').then( m => m.OrdersPage)
  },
  
];
