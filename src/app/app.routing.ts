import { AddMicroCreditComponent } from './Credit/add-micro-credit/add-micro-credit.component';
import { CreditDetailsComponent } from './Credit/credit-details/credit-details.component';
import { HomeComponent } from './homepage/home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './homepage/services/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {path : 'creditDetails/:id', component : CreditDetailsComponent},
      { path: 'addmicrocredit', component : AddMicroCreditComponent }

    ]
  },
  {
    path: 'home', component: HomeComponent
  },
  //{path : 'creditDetails/:id', component : CreditDetailsComponent}
  
];
