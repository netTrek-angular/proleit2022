import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import {UserComponent} from "./user/user.component";
import { SamplesModule } from './samples/samples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
