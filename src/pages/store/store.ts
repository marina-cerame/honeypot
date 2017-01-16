import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PetPage} from '../pet/pet';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  purchase() {
    this.navCtrl.setRoot(PetPage);
  }

}
