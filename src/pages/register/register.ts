import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Auth} from "../../providers/auth";
import {SignIn} from "../signIn/signIn";

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  constructor(private auth: Auth, public navCtrl: NavController, public navParams: NavParams) {
  }


  onSingUp(form: NgForm){
    this.auth.signUp(form.value.name, form.value.user_name, form.value.email, form.value.password)
      .subscribe(
        response => this.navCtrl.push(SignIn),
        error => console.log(error)
      );

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
