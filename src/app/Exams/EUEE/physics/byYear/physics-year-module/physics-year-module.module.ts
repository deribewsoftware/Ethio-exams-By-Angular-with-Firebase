import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { Ph2015Component } from '../ph2015/ph2015.component';
import { Ph2014Component } from '../ph2014/ph2014.component';
import { Ph2013Component } from '../ph2013/ph2013.component';
import { Ph2012Component } from '../ph2012/ph2012.component';
const routes:Routes=[
  {
    path:"physics",
    children:[
      {
        path:"year",
        children: [
          {
            path:"2015",
            component:Ph2015Component
          },
          {
            path:"2014",
            component:Ph2014Component
          },
          {
            path:"2013",
            component:Ph2013Component
          },
          {
            path:"2012",
            component:Ph2012Component
          },
        ],
      },

      {
        path:"grade",
        children:[]
      }


    ]
  },

]


@NgModule({
  declarations: [
    Ph2015Component,
    Ph2014Component,
    Ph2013Component,
    Ph2012Component,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PhysicsYearModuleModule { }
