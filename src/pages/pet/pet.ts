import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorePage } from '../store/store';

@Component({
  selector: 'page-pet',
  templateUrl: 'pet.html'
})
export class PetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToStore() {
    this.navCtrl.push(StorePage);
  }

}
