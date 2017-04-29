import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Home tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage()
export class Home {

  tab1Root: any = Feed;
  tab2Root: any = Story;
  tab3Root: any = Profile;

  constructor(public navCtrl: NavController) {}

}
