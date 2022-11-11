import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import {UserComponent} from "./user/user.component";
import { SamplesModule } from './samples/samples.module';
import { UtilsModule } from './utils/utils.module';

import '@angular/common/locales/global/de'
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppAuthInterceptor} from "./app-auth.interceptor";
import {AppLoadingInterceptor} from "./app-loading.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SamplesModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' },
    {provide: HTTP_INTERCEPTORS, useClass: AppAuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: AppLoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
