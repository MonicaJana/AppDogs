import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
    ],
  providers: [{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp({"projectId":"imagenes-e66d6","appId":"1:479856214901:web:09b8504fd12b76c67d493c","storageBucket":"imagenes-e66d6.firebasestorage.app","apiKey":"AIzaSyBX_bj3uTa1iPlq_Cs09MlBUk7fbKk2rb8","authDomain":"imagenes-e66d6.firebaseapp.com","messagingSenderId":"479856214901","measurementId":"G-VZQZY088XS"})), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
