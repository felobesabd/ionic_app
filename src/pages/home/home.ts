import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Observable } from "rxjs";
// import {AngularFireAuth} from 'angularfire2/auth';
// import firebase from 'firebase';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AngularFireAuth} from "angularfire2/auth";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  photo: string = '';
  isPhoto: boolean = false;

  private itemsCollection: AngularFirestoreCollection<any>;
  persons: Observable<any[]>;

  constructor(public navCtrl: NavController, public afs: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged((user) => {
      if (!user) {
        alert('please login')
        navCtrl.setRoot(LoginPage)
      } else {
        this.photo = localStorage.getItem('photo')
        this.isPhoto = true;
        console.log(this.photo)
      }
    });
    // this.persons = db.collection('/people');
    this.itemsCollection = afs.collection<any>('/people');
    this.persons = this.itemsCollection.valueChanges();
  }

  deletePerson(data: any) {
    console.log(data)
  }



}
