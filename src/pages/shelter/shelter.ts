import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdoptPetPage } from '../adopt-pet/adopt-pet';

@Component({
  selector: 'page-shelter',
  templateUrl: 'shelter.html'
})
export class ShelterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToAdoptPet() {
    this.navCtrl.push(AdoptPetPage);
  }

}
