import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';

import { SideMenuComponent } from '../Components/side-menu/side-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



import { QuestionsComponent } from '../Components/Questions/questions.component';
import { EueeHomePageComponent } from '../EUEE/euee-home-page/euee-home-page.component';
import { FreshHomePageComponent } from '../Freshman/fresh-home-page/fresh-home-page.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { B2015Component } from '../EUEE/english/byYear/b2015/b2015.component';
import { B2014Component } from '../EUEE/biology/byYear/b2014/b2014.component';
import { B2013Component } from '../EUEE/biology/byYear/b2013/b2013.component';
import { B2012Component } from '../EUEE/biology/byYear/b2012/b2012.component';
import { C2015Component } from '../EUEE/chemistry/byYear/c2015/c2015.component';
import { C2014Component } from '../EUEE/chemistry/byYear/c2014/c2014.component';
import { C2013Component } from '../EUEE/chemistry/byYear/c2013/c2013.component';
import { C2012Component } from '../EUEE/chemistry/byYear/c2012/c2012.component';
import { Civ2015Component } from '../EUEE/Civics/byYear/civ2015/civ2015.component';
import { Civ2014Component } from '../EUEE/Civics/byYear/civ2014/civ2014.component';
import { Civ2013Component } from '../EUEE/Civics/byYear/civ2013/civ2013.component';
import { Civ2012Component } from '../EUEE/Civics/byYear/civ2012/civ2012.component';
import { S2015Component } from '../EUEE/chemistry/byYear/s2015/s2015.component';
import { S2014Component } from '../EUEE/SAT/byYear/s2014/s2014.component';
import { S2013Component } from '../EUEE/SAT/byYear/s2013/s2013.component';
import { S2012Component } from '../EUEE/SAT/byYear/s2012/s2012.component';
import { M2015Component } from '../EUEE/maths/byYear/m2015/m2015.component';
import { M2014Component } from '../EUEE/maths/byYear/m2014/m2014.component';
import { M2013Component } from '../EUEE/maths/byYear/m2013/m2013.component';
import { M2012Component } from '../EUEE/maths/byYear/m2012/m2012.component';
import { E2015Component } from '../EUEE/english/byYear/e2015/e2015.component';
import { E2014Component } from '../EUEE/english/byYear/e2014/e2014.component';
import { E2013Component } from '../EUEE/english/byYear/e2013/e2013.component';
import { E2012Component } from '../EUEE/english/byYear/e2012/e2012.component';


import { ExamPageComponent } from '../Components/exam-page/exam-page.component';
import { physicsRouter } from './Routers/EueeRouter/PhysicsRouter';
import { Y10AllComponent } from '../EUEE/physics/byYear/ph2010/y10-all/y10-all.component';
import { G9AllComponent } from '../EUEE/physics/byYear/ph2010/grade 9/g9-all/g9-all.component';
import { AllComponent } from '../EUEE/physics/byYear/ph2010/grade 12/all/all.component';
import { Y10ph12OneComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-one/y10ph12-one.component';
import { Y10ph12ThreeComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-three/y10ph12-three.component';
import { Y10ph12FourComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-four/y10ph12-four.component';
import { Y10ph12FiveComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-five/y10ph12-five.component';
import { Y10ph12EightComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-eight/y10ph12-eight.component';
import { Y10ph11EightComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-eight/y10ph11-eight.component';
import { Y10ph11SixComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-six/y10ph11-six.component';
import { Y10ph11ThreeComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-three/y10ph11-three.component';
import { Y10ph11TwoComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-two/y10ph11-two.component';
import { Y10ph10TwoComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-two/y10ph10-two.component';
import { Y10ph10ThreeComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-three/y10ph10-three.component';
import { Y10ph10FourComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-four/y10ph10-four.component';
import { Y10ph10FiveComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-five/y10ph10-five.component';
import { Y10ph10SixComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-six/y10ph10-six.component';
import { Y10ph10SevenComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-seven/y10ph10-seven.component';
import { Y10ph10EightComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-eight/y10ph10-eight.component';
import { Y10ph9EightComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-eight/y10ph9-eight.component';
import { Y10ph9SevenComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-seven/y10ph9-seven.component';
import { Y10ph9SixComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-six/y10ph9-six.component';
import { Y10ph9FiveComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-five/y10ph9-five.component';
import { Y10ph9FourComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-four/y10ph9-four.component';
import { Y10ph9ThreeComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-three/y10ph9-three.component';
import { Y10ph9TwoComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-two/y10ph9-two.component';
import { Y10ph9OneComponent } from '../EUEE/physics/byYear/ph2010/grade 9/y10ph9-one/y10ph9-one.component';
import { G10AllComponent } from '../EUEE/physics/byYear/ph2010/grade 10/g10-all/g10-all.component';
import { G11AllComponent } from '../EUEE/physics/byYear/ph2010/grade 11/g11-all/g11-all.component';
import { Y10ph12TwoComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-two/y10ph12-two.component';
import { Y10ph12SixComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-six/y10ph12-six.component';
import { Y10ph12SevenComponent } from '../EUEE/physics/byYear/ph2010/grade 12/y10ph12-seven/y10ph12-seven.component';
import { Y10ph11SevenComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-seven/y10ph11-seven.component';
import { Y10ph11FiveComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-five/y10ph11-five.component';
import { Y10ph11FourComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-four/y10ph11-four.component';
import { Y10ph11OneComponent } from '../EUEE/physics/byYear/ph2010/grade 11/y10ph11-one/y10ph11-one.component';
import { Y10ph10OneComponent } from '../EUEE/physics/byYear/ph2010/grade 10/y10ph10-one/y10ph10-one.component';
import { ExamsModelService } from '../EUEE/exams-model.service';
import { Y15ph9TwoComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-two/y15ph9-two.component';
import { Y15ph12TwoComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-two/y15ph12-two.component';
import { Y15ph12OneComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-one/y15ph12-one.component';
import { Y15ph12ThreeComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-three/y15ph12-three.component';
import { Y15ph12FourComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-four/y15ph12-four.component';
import { Y15ph12FiveComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-five/y15ph12-five.component';
import { Y15ph12SixComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-six/y15ph12-six.component';
import { Y15G12AllComponent } from '../EUEE/physics/byYear/phy2015/y15-g12-all/y15-g12-all.component';
import { Y15ph12EightComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-eight/y15ph12-eight.component';
import { Y15ph12SevenComponent } from '../EUEE/physics/byYear/phy2015/grade 12/y15ph12-seven/y15ph12-seven.component';
import { Y15ph9OneComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-one/y15ph9-one.component';
import { Y15ph9EightComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-eight/y15ph9-eight.component';
import { Y15ph9SevenComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-seven/y15ph9-seven.component';
import { Y15ph9SixComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-six/y15ph9-six.component';
import { Y15ph9FourComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-four/y15ph9-four.component';
import { Y15ph9ThreeComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-three/y15ph9-three.component';
import { Y15ph10TwoComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-two/y15ph10-two.component';
import { Y15ph10FourComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-four/y15ph10-four.component';
import { Y15ph10FiveComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-five/y15ph10-five.component';
import { Y15ph10SixComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-six/y15ph10-six.component';
import { Y15ph10SevenComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-seven/y15ph10-seven.component';
import { Y15ph10EightComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-eight/y15ph10-eight.component';
import { Y15ph11EightComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-eight/y15ph11-eight.component';
import { Y15ph11SevenComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-seven/y15ph11-seven.component';
import { Y15ph11SixComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-six/y15ph11-six.component';
import { Y15ph11FiveComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-five/y15ph11-five.component';
import { Y15ph11FourComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-four/y15ph11-four.component';
import { Y15ph11ThreeComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-three/y15ph11-three.component';
import { Y15ph11TwoComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-two/y15ph11-two.component';
import { Y15ph11OneComponent } from '../EUEE/physics/byYear/phy2015/grade 11/y15ph11-one/y15ph11-one.component';
import { Y15ph10ThreeComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-three/y15ph10-three.component';
import { Y15ph10OneComponent } from '../EUEE/physics/byYear/phy2015/grade 10/y15ph10-one/y15ph10-one.component';
import { Y15ph9FiveComponent } from '../EUEE/physics/byYear/phy2015/grade 9/y15ph9-five/y15ph9-five.component';
import { Y11phComponent } from '../EUEE/physics/byYear/phy2011/y11ph/y11ph.component';
import { Y12phComponent } from '../EUEE/physics/byYear/phy2012/y12ph/y12ph.component';
import { Y13phComponent } from '../EUEE/physics/byYear/phy2013/y13ph/y13ph.component';
import { Y14phComponent } from '../EUEE/physics/byYear/phy2014/y14ph/y14ph.component';
import { PhyComponent } from '../EUEE/physics/phy/phy.component';
import { Y15G12Component } from '../EUEE/physics/byYear/phy2015/y15-g12/y15-g12.component';
import { PhyY15G12Component } from '../EUEE/physics/byYear/phy2015/grade 12/phy-y15-g12/phy-y15-g12.component';
import { Y15G9Component } from '../EUEE/physics/byYear/phy2015/grade 9/y15-g9/y15-g9.component';
import { Y15G10Component } from '../EUEE/physics/byYear/phy2015/grade 10/y15-g10/y15-g10.component';
import { Y15G11Component } from '../EUEE/physics/byYear/phy2015/grade 11/y15-g11/y15-g11.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { HomepageComponent } from '../Freshman/homepage/homepage.component';
import { FreshmanExamComponent } from '../Freshman/freshman-exam/freshman-exam.component';
import { FshPsychologyEightComponent } from '../Freshman/psychology/fsh-psychology-eight/fsh-psychology-eight.component';
import { FshPsychologySevenComponent } from '../Freshman/psychology/fsh-psychology-seven/fsh-psychology-seven.component';
import { FshPsychologyFiveComponent } from '../Freshman/psychology/fsh-psychology-five/fsh-psychology-five.component';
import { FshPsychologyFourComponent } from '../Freshman/psychology/fsh-psychology-four/fsh-psychology-four.component';
import { FshPsychologyThreeComponent } from '../Freshman/psychology/fsh-psychology-three/fsh-psychology-three.component';
import { FshPsychologySixComponent } from '../Freshman/psychology/fsh-psychology-six/fsh-psychology-six.component';
import { FshPsychologyTwoComponent } from '../Freshman/psychology/fsh-psychology-two/fsh-psychology-two.component';
import { FshPsychologyOneComponent } from '../Freshman/psychology/fsh-psychology-one/fsh-psychology-one.component';
import { FshPsychologyComponent } from '../Freshman/psychology/fsh-psychology/fsh-psychology.component';
import { PsychologyRouter } from './Routers/UniversityRouter/freshmanRouter/psychology/psychology';
import { LoginComponent } from 'src/app/Auth/login/login.component';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';
import { CreateExamsComponent } from '../CreateExams/create-exams/create-exams.component';




const routes:Routes=[


    { path:'',component: HomePageComponent},
    {
      path:'auth',
      children:[
        { path:'signup',component:SignupComponent},
        { path:'login',component:LoginComponent},
      ]
    },
    {path:'create',component:CreateExamsComponent},


{
  path:"euee",
  children:[
    {
      path:"homepage",
      component:EueeHomePageComponent
    },


    physicsRouter,




      {path:"biology",
          children: [
            {
              path:"year",
              children:[
                {path:"2015", component:B2015Component},
                {path:"2014", component:B2014Component},
                {path:"2013", component:B2013Component},
                {path:"2012", component:B2012Component},
              ]
            },
            {
              path:"grade",
              children:[]
            },]},

            {
              path:"english",
              children:[
                {
                  path:"year",
                  children:[
                    {path:"2015",component:E2015Component},
                    {path:"2014",component:E2014Component},
                    {path:"2013",component:E2013Component},
                    {path:"2012",component:E2012Component},
                  ]
                },
                {
                  path:"grade",
                  children:[]
                },
              ]
            },

            {
              path:"maths",
              children:[
                {
                  path:"year",
                  children:[
                    {path:"2015",component:M2015Component},
                    {path:"2014",component:M2014Component},
                    {path:"2013",component:M2013Component},
                    {path:"2012",component:M2012Component},
                  ]
                },
                {
                  path:"grade",
                  children:[]
                },
              ]
            },

            {
              path:"sat",
              children:[
                {
                  path:"year",
                  children:[
                    {path:"2015",component:S2015Component},
                    {path:"2014",component:S2014Component},
                    {path:"2013",component:S2013Component},
                    {path:"2012",component:S2012Component},
                  ]
                },
                {
                  path:"grade",
                  children:[]
                },
              ]
            },

            {
              path:"chemistry",
              children:[
                {
                  path:"year",
                  children:[
                    {path:"2015",component:C2015Component},
                    {path:"2014",component:C2014Component},
                    {path:"2013",component:C2013Component},
                    {path:"2012",component:C2012Component},
                  ]
                },
                {
                  path:"grade",
                  children:[]
                },
              ]
            },

            {
              path:"civic",
              children:[
                {
                  path:"year",
                  children:[
                    {path:"2015",component:Civ2015Component},
                    {path:"2014",component:Civ2014Component},
                    {path:"2013",component:Civ2013Component},
                    {path:"2012",component:Civ2012Component},
                  ]
                },
                {
                  path:"grade",
                  children:[]
                },
              ]
            }

  ]
},





{
  path:"freshman",
  children:[
    {
      path:"homepage",
      component:FreshHomePageComponent
    },
    PsychologyRouter

  ]
},


]


@NgModule({
  declarations: [
    EueeHomePageComponent,
    FreshHomePageComponent,

    NavBarComponent,
    QuestionsComponent,
    SideMenuComponent,

    ExamPageComponent,
    Y10ph9OneComponent,
    Y10ph9TwoComponent,
    Y10ph9ThreeComponent,
    Y10ph9FourComponent,
    Y10ph9FiveComponent,
    Y10ph9SixComponent,
    Y10ph9SevenComponent,
    Y10ph9EightComponent,
    Y10ph10EightComponent,
    Y10ph10SevenComponent,
    Y10ph10SixComponent,
    Y10ph10FiveComponent,
    Y10ph10FourComponent,
    Y10ph10ThreeComponent,
    Y10ph10TwoComponent,
    Y10ph10OneComponent,
    Y10ph11OneComponent,
    Y10ph11TwoComponent,
    Y10ph11ThreeComponent,
    Y10ph11FourComponent,
    Y10ph11FiveComponent,
    Y10ph11SixComponent,
    Y10ph11SevenComponent,
    Y10ph11EightComponent,
    Y10ph12EightComponent,
    Y10ph12SevenComponent,
    Y10ph12SixComponent,
    Y10ph12FiveComponent,
    Y10ph12FourComponent,
    Y10ph12ThreeComponent,
    Y10ph12TwoComponent,
    Y10ph12OneComponent,
    AllComponent,
    G11AllComponent,
    G10AllComponent,
    G9AllComponent,
    Y10AllComponent,
    Y15ph9OneComponent,
    Y15ph9TwoComponent,
    Y15ph12TwoComponent,
    Y15ph12OneComponent,
    Y15ph12ThreeComponent,
    Y15ph12FourComponent,
    Y15ph12FiveComponent,
    Y15ph12SixComponent,
    Y15ph12SevenComponent,
    Y15ph12EightComponent,
    Y15G12AllComponent,


    Y15ph11OneComponent,
    Y15ph11TwoComponent,
    Y15ph11ThreeComponent,
    Y15ph11FourComponent,
    Y15ph11FiveComponent,
    Y15ph11SixComponent,
    Y15ph11SevenComponent,
    Y15ph11EightComponent,
    Y15ph10EightComponent,
    Y15ph10SevenComponent,
    Y15ph10SixComponent,
    Y15ph10FiveComponent,
    Y15ph10FourComponent,
    Y15ph10ThreeComponent,
    Y15ph10TwoComponent,
    Y15ph10OneComponent,
    Y15ph9ThreeComponent,
    Y15ph9FourComponent,
    Y15ph9FiveComponent,
    Y15ph9SixComponent,
    Y15ph9SevenComponent,
    Y15ph9EightComponent,

    Y14phComponent,
    Y13phComponent,
    Y12phComponent,
    Y11phComponent,
    PhyComponent,
    Y15G12Component,
    Y15G11Component,
    Y15G10Component,
    Y15G9Component,
    PhyY15G12Component,
    FreshmanExamComponent,
    FshPsychologyComponent,
    FshPsychologyOneComponent,
    FshPsychologyTwoComponent,
    FshPsychologyThreeComponent,
    FshPsychologyFourComponent,
    FshPsychologyFiveComponent,
    FshPsychologySixComponent,
    FshPsychologySevenComponent,
    FshPsychologyEightComponent,
    LoginComponent,
    SignupComponent,
    CreateExamsComponent,
    HomePageComponent,



    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),

    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ExamsModelService],
  exports:[NavBarComponent,SideMenuComponent,QuestionsComponent,EueeHomePageComponent,FreshHomePageComponent]
})
export class ExamsModule { }
