import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-a3c2c","appId":"1:355782691296:web:2bef3f3641dcbd46b48385","storageBucket":"simple-crm-a3c2c.appspot.com","apiKey":"AIzaSyAqW0jcxW2LKYzpAg2jNSFbb36J5NpagG4","authDomain":"simple-crm-a3c2c.firebaseapp.com","messagingSenderId":"355782691296"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
