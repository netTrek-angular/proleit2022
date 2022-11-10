import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import {UserComponent} from "./user/user.component";
import { SamplesModule } from './samples/samples.module';
import { UtilsModule } from './utils/utils.module';

import '@angular/common/locales/global/de'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SamplesModule,
    UtilsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
