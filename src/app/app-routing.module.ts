import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: ListComponent
  },
];

// const routes: Routes = [{
//     path: '',
//     redirectTo: '/dashboard',
//     pathMatch: 'full'
//   }, {
//     path: 'dashboard',
//     component: ListComponent,
//     canActivate: [AuthGuard]
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
