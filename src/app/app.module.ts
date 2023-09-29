import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, rountingComponent } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';






import { ExamsModule } from './Exams/exams/exams.module';




import { B2015Component } from './Exams/EUEE/biology/byYear/b2015/b2015.component';
import { B2014Component } from './Exams/EUEE/biology/byYear/b2014/b2014.component';
import { B2013Component } from './Exams/EUEE/biology/byYear/b2013/b2013.component';
import { B2012Component } from './Exams/EUEE/biology/byYear/b2012/b2012.component';
import { E2015Component } from './Exams/EUEE/english/byYear/e2015/e2015.component';
import { E2014Component } from './Exams/EUEE/english/byYear/e2014/e2014.component';
import { E2013Component } from './Exams/EUEE/english/byYear/e2013/e2013.component';
import { E2012Component } from './Exams/EUEE/english/byYear/e2012/e2012.component';
import { M2015Component } from './Exams/EUEE/maths/byYear/m2015/m2015.component';
import { M2014Component } from './Exams/EUEE/maths/byYear/m2014/m2014.component';
import { M2013Component } from './Exams/EUEE/maths/byYear/m2013/m2013.component';
import { M2012Component } from './Exams/EUEE/maths/byYear/m2012/m2012.component';
import { C2015Component } from './Exams/EUEE/chemistry/byYear/c2015/c2015.component';
import { C2014Component } from './Exams/EUEE/chemistry/byYear/c2014/c2014.component';
import { C2013Component } from './Exams/EUEE/chemistry/byYear/c2013/c2013.component';
import { C2012Component } from './Exams/EUEE/chemistry/byYear/c2012/c2012.component';
import { S2015Component } from './Exams/EUEE/chemistry/byYear/s2015/s2015.component';
import { S2014Component } from './Exams/EUEE/SAT/byYear/s2014/s2014.component';
import { S2013Component } from './Exams/EUEE/SAT/byYear/s2013/s2013.component';
import { S2012Component } from './Exams/EUEE/SAT/byYear/s2012/s2012.component';
import { Civ2015Component } from './Exams/EUEE/Civics/byYear/civ2015/civ2015.component';
import { Civ2014Component } from './Exams/EUEE/Civics/byYear/civ2014/civ2014.component';
import { Civ2013Component } from './Exams/EUEE/Civics/byYear/civ2013/civ2013.component';
import { Civ2012Component } from './Exams/EUEE/Civics/byYear/civ2012/civ2012.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';









// import {provideFirestore} from "@angular/fire/firestore";







@NgModule({
  declarations: [

    AppComponent,
    rountingComponent,
    B2015Component,
    B2014Component,
    B2013Component,
    B2012Component,
    E2015Component,
    E2014Component,
    E2013Component,
    E2012Component,
    M2015Component,
    M2014Component,
    M2013Component,
    M2012Component,
    C2015Component,
    C2014Component,
    C2013Component,
    C2012Component,
    S2015Component,
    S2014Component,
    S2013Component,
    S2012Component,
    Civ2015Component,
    Civ2014Component,
    Civ2013Component,
    Civ2012Component,
    






















  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule,

    ExamsModule,
     provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideAuth(() => getAuth()),
     provideFirestore(() => getFirestore())



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
