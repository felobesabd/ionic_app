import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AngularFireAuth} from "angularfire2/auth";
import firebase from "firebase";
import {UserInfoPage} from "../user-info/user-info";

/**
 * Generated class for the PagesFirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-first',
  templateUrl: 'pages-first.html',
})
export class PagesFirstPage {

  info = {
    name: '',
    email: '',
    photo: '',
    isLogged: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private view: ViewController, public afAuth: AngularFireAuth) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }


  login() {
    this.navCtrl.push(LoginPage)
  }

  loginByTwitter() {

  }

  loginByFacebook() {

  }

  loginByGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result: any) => {
      // let credential = result.credential;
      console.log(result)
      let user = result.user;
      this.info.name = user.displayName
      this.info.email = user.email
      this.info.photo = user.photoURL

      this.info.isLogged = true
      localStorage.setItem('userName', user.displayName)
      localStorage.setItem('email', user.email)
      localStorage.setItem('photo', user.photoURL)
      console.log(this.info)
      this.navCtrl.push(UserInfoPage, {
        name : this.info.name,
        email : this.info.email,
        photo: this.info.photo,
        isLogged: this.info.isLogged,
      })
      // This gives you a Google Access Token. You can use it to access the Google API.
      // let token = credential.accessToken;
      // The signed-in user info.

      // IdP data available in result.additionalUserInfo.profile.
      // ...
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // let credential = error.credential;
      // ...
    });
  }
}
