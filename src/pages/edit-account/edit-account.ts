import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPets } from '../mypets/mypets';

@Component({
  selector: 'page-edit-account',
  templateUrl: 'edit-account.html'
})
export class EditAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  saveChanges() {
    this.navCtrl.setRoot(MyPets);
  }

}
