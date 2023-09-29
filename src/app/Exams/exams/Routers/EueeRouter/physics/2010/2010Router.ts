import { Y10ph10EightComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-eight/y10ph10-eight.component";
import { Y10ph10FiveComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-five/y10ph10-five.component";
import { Y10ph10FourComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-four/y10ph10-four.component";
import { Y10ph10SevenComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-seven/y10ph10-seven.component";
import { Y10ph10SixComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-six/y10ph10-six.component";
import { Y10ph10ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-three/y10ph10-three.component";
import { Y10ph10TwoComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 10/y10ph10-two/y10ph10-two.component";
import { Y10ph11EightComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-eight/y10ph11-eight.component";
import { Y10ph11FiveComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-five/y10ph11-five.component";
import { Y10ph11FourComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-four/y10ph11-four.component";
import { Y10ph11OneComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-one/y10ph11-one.component";
import { Y10ph11SevenComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-seven/y10ph11-seven.component";
import { Y10ph11SixComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-six/y10ph11-six.component";
import { Y10ph11ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-three/y10ph11-three.component";
import { Y10ph11TwoComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 11/y10ph11-two/y10ph11-two.component";
import { Y10ph12EightComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-eight/y10ph12-eight.component";
import { Y10ph12FiveComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-five/y10ph12-five.component";
import { Y10ph12FourComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-four/y10ph12-four.component";
import { Y10ph12OneComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-one/y10ph12-one.component";
import { Y10ph12SevenComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-seven/y10ph12-seven.component";
import { Y10ph12SixComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-six/y10ph12-six.component";
import { Y10ph12ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-three/y10ph12-three.component";
import { Y10ph12TwoComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 12/y10ph12-two/y10ph12-two.component";
import { Y10ph9EightComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-eight/y10ph9-eight.component";
import { Y10ph9FiveComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-five/y10ph9-five.component";
import { Y10ph9FourComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-four/y10ph9-four.component";
import { Y10ph9OneComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-one/y10ph9-one.component";
import { Y10ph9SevenComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-seven/y10ph9-seven.component";
import { Y10ph9SixComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-six/y10ph9-six.component";
import { Y10ph9ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-three/y10ph9-three.component";
import { Y10ph9TwoComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/grade 9/y10ph9-two/y10ph9-two.component";


import { Y10AllComponent } from "src/app/Exams/EUEE/physics/byYear/ph2010/y10-all/y10-all.component";


export const Ph2010Router={
  path:"2010",
  children:[
    {
      path:"all",
      component:Y10AllComponent
    },
    {
      path:"9",
      children:[
        {
          path:"one",
          component:Y10ph9OneComponent
        },
        {
          path:"two",
          component:Y10ph9TwoComponent
        },
        {
          path:"three",
          component:Y10ph9ThreeComponent
        },
        {
          path:"four",
          component:Y10ph9FourComponent
        },
        {
          path:"five",
          component:Y10ph9FiveComponent
        },
        {
          path:"six",
          component:Y10ph9SixComponent
        },
        {
          path:"seven",
          component:Y10ph9SevenComponent
        },
        {
          path:"eight",
          component:Y10ph9EightComponent
        },

      ]
    },
    {
      path:"10",
      children:[
        // {
        //   path:"one",
        //   component:Y10ph10OneComponent
        // },
        {
          path:"two",
          component:Y10ph10TwoComponent
        },
        {
          path:"three",
          component:Y10ph10ThreeComponent
        },
        {
          path:"four",
          component:Y10ph10FourComponent
        },
        {
          path:"five",
          component:Y10ph10FiveComponent
        },
        {
          path:"six",
          component:Y10ph10SixComponent
        },
        {
          path:"seven",
          component:Y10ph10SevenComponent
        },
        {
          path:"eight",
          component:Y10ph10EightComponent
        },
      ]
    },
    {
      path:"11",
      children:[
        {
          path:"one",
          component:Y10ph11OneComponent
        },
        {
          path:"two",
          component:Y10ph11TwoComponent
        },
        {
          path:"three",
          component:Y10ph11ThreeComponent
        },
        {
          path:"four",
          component:Y10ph11FourComponent
        },
        {
          path:"five",
          component:Y10ph11FiveComponent
        },
        {
          path:"six",
          component:Y10ph11SixComponent
        },
        {
          path:"seven",
          component:Y10ph11SevenComponent
        },
        {
          path:"eight",
          component:Y10ph11EightComponent
        },

      ]
    },
    {
      path:"12",
      children:[
        {
          path:"one",
          component:Y10ph12OneComponent
        },
        {
          path:"two",
          component: Y10ph12TwoComponent
        },
        {
          path:"three",
          component:Y10ph12ThreeComponent
        },
        {
          path:"four",
          component:Y10ph12FourComponent
        },
        {
          path:"five",
          component:Y10ph12FiveComponent
        },
        {
          path:"six",
          component:Y10ph12SixComponent
        },
        {
          path:"seven",
          component:Y10ph12SevenComponent
        },
        {
          path:"eight",
          component:Y10ph12EightComponent
        },

  ]
},
]

}
