import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from './oauth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
