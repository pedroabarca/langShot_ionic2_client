import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Home } from './home';

@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicModule.forRoot(Home),
  ]
})
export class HomeModule {}
