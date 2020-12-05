import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginService } from './service/login.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    ErrorPageComponent,
    SubscribeComponent,
    LoginComponent,
    DriverListComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
