import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PetPage } from '../pet/pet';

@Component({
  selector: 'page-adopt-pet',
  templateUrl: 'adopt-pet.html'
})
export class AdoptPetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  saveNewPet() {
    this.navCtrl.setRoot(PetPage);
  }

}
