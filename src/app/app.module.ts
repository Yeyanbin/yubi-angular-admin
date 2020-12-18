import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';

import zh from '@angular/common/locales/zh';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from '@api/mock/mock';
import { httpInterceptorProviders } from '@api/http-interceptors/index';
import { LoginGuard } from './_guard/Permissions';


registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    // 拦截器
    httpInterceptorProviders,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
