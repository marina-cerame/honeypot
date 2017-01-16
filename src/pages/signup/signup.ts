import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPets } from '../mypets/mypets';
import { BankAuthPage } from '../bank-auth/bank-auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  createAccount() {
    this.navCtrl.push(BankAuthPage);
  }

}
