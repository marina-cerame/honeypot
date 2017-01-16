import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPets } from '../mypets/mypets';
import { SignupPage} from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {

  }

  signIn() {
    this.navCtrl.setRoot(MyPets);
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }

}
