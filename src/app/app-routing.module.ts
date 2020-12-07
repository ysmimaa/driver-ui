import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';

const routes: Routes = [
  {
    path: 'welcome/:username',
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'subscribe',
    component: SubscribeComponent,
  },
  {
    path: 'driver-detail/:idUser',
    component: DriverDetailComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'driver-list',
    component: DriverListComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'create',
    component: CreateDriverComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: WelcomeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
