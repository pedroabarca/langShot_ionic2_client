import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SignIn } from "../pages/signIn/signIn";
import { Register } from "../pages/register/register"
import {FormsModule} from "@angular/forms";
import {Auth} from "../providers/auth";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    SignIn,
    Register
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignIn,
    Register
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
