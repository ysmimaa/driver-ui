import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriverComponent } from './driver/create/create-driver.component';
import { DriverDetailComponent } from './driver/detail/driver-detail.component';
import { DriverListComponent } from './driver/list/driver-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InterceptersService } from './service/auth/http/intercepters.service';
import { LoginService } from './service/auth/login.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JourneyListComponent } from './journey/list/journey-list.component';
import { CreateJourneyComponent } from './journey/create/create-journey.component';
import { JourneyDetailComponent } from './journey/detail/journey-detail.component';


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
    LogoutComponent,
    DriverDetailComponent,
    CreateDriverComponent,
    JourneyListComponent,
    CreateJourneyComponent,
    JourneyDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptersService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
