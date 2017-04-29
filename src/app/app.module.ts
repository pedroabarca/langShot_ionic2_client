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
import {Feed} from "../pages/feed/feed";
import {Story} from "../pages/story/story";
import {Profile} from "../pages/profile/profile";
import {Home} from "../pages/home/home";

@NgModule({
  declarations: [
    MyApp,
    SignIn,
    Register,
    Home,
    Feed,
    Story,
    Profile
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
    Register,
    Home,
    Feed,
    Story,
    Profile
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
