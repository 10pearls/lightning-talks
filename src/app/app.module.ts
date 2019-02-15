import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ProposalsModule } from './proposals/proposals.module';
import { AnnoucementsModule } from './annoucements/annoucements.module';
import { ShellModule } from './shell/shell.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    CoreModule,
    ShellModule,
    AuthModule,
    ProposalsModule,
    AnnoucementsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCgzMsB_4_4MPMfTQY6A_XCPTsMvVsgmNg",
      authDomain: "lightning-app-dev.firebaseapp.com",
      databaseURL: "https://lightning-app-dev.firebaseio.com",
      projectId: "lightning-app-dev",
      storageBucket: "lightning-app-dev.appspot.com",
      messagingSenderId: "164968253058",
    }),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
