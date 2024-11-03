import { Routes } from '@angular/router';

export const routes: Routes = [
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
            loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
          },
        ],
        
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
  
];
