import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

import {CardModule} from 'ngx-card/ngx-card';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';

//AngularMaps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios'
 }), AppRoutingModule,
     CardModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8565_fd7mPzTNUaxnD7GPDNzdDhUQ7tQ'
    })
    ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
