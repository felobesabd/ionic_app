import { Component } from '@angular/core';
import {Modal, ModalController, ModalOptions, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AngularFirestore} from "angularfire2/firestore";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, private modal: ModalController) {

  }

  // login() {
  //   this.navCtrl.push(LoginPage)
  // }

  register() {
    this.navCtrl.push(RegisterPage)
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      alert('logout successful')
    }).catch((error) => {
      alert('An error happened.')
    });
  }

  openModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create('PagesFirstPage', { data: myModalData }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }

}
