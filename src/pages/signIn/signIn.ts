import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Register} from "../register/register";
import {NgForm} from "@angular/forms";
import {Auth} from "../../providers/auth";

/**
 * Generated class for the SignIn page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html',
})
export class SignIn {

  constructor(private auth:Auth, private navCtrl: NavController, private SnavParams: NavParams) {

  }

  public register() {
    this.navCtrl.push(Register);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignIn');
  }

  onSignIn(form:NgForm){
    console.log('entró')
    this.auth.signIn(form.value.email, form.value.password)
      .subscribe(
        response =>console.log(response),
        error => console.log(error)
      );


  }

}
