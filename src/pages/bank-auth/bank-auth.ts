import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPets } from '../mypets/mypets';
/*
  Generated class for the BankAuth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bank-auth',
  templateUrl: 'bank-auth.html'
})
export class BankAuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  saveBankAuth() {
    this.navCtrl.setRoot(MyPets);
  }

}
