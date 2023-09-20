import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  info = {
    name: '',
    email: '',
    photo: '',
    isLogged: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info.name = navParams.get('name')
    this.info.photo = navParams.get('photo')
    this.info.email = navParams.get('email')
    this.info.isLogged = navParams.get('isLogged')
  }

  ionViewDidLoad() {
  }

}
