import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EditPersonPageModule} from "../pages/edit-person/edit-person.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms'
import {RegisterPageModule} from "../pages/register/register.module";
import {LoginPageModule} from "../pages/login/login.module";
import {UserInfoPageModule} from "../pages/user-info/user-info.module";
import {PagesFirstPageModule} from "../pages/pages-first/pages-first.module";

const firebaseConfig = {
  apiKey: "AIzaSyBLlwE_gwGC2iZEmjTs3Q6HlYbNQ-XPmpc",
  authDomain: "ionicdb-1c7bf.firebaseapp.com",
  projectId: "ionicdb-1c7bf",
  storageBucket: "ionicdb-1c7bf.appspot.com",
  messagingSenderId: "788650360218",
  appId: "1:788650360218:web:8bdf4a58d045285ffb0e23",
  measurementId: "G-7XT5CN8FM5"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // EditPersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EditPersonPageModule,
    RegisterPageModule,
    LoginPageModule,
    UserInfoPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // EditPersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
