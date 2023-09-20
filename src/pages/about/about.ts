import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import {HomePage} from "../home/home";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {LoginPage} from "../login/login";
import {AngularFireAuth} from "angularfire2/auth";
// import { Observable } from 'rxjs';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  persons: AngularFirestoreCollection<any>;

  name: string;
  lname:string;
  age:number;
  dept:string;

  constructor(public navCtrl: NavController, public db: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged((user) => {
      if (!user) {
        alert('please login')
        navCtrl.setRoot(LoginPage)
      }
    });
    this.persons = db.collection('/people');
  }

  createPerson(name, lname, age, dept) {
    console.log(name, lname, age, dept)
    this.persons.add({
      name: name,
      lname: lname,
      age: age,
      dept: dept
    }).then(newPer => {
      this.navCtrl.push(HomePage)
      console.log(newPer)
    }, error => {console.log(error)})
    console.log(this.persons)
  }
}
