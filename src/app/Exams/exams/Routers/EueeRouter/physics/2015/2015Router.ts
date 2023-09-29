import { Y15ph10EightComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-eight/y15ph10-eight.component";
import { Y15ph10FiveComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-five/y15ph10-five.component";
import { Y15ph10FourComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-four/y15ph10-four.component";
import { Y15ph10OneComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-one/y15ph10-one.component";
import { Y15ph10SevenComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-seven/y15ph10-seven.component";
import { Y15ph10SixComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-six/y15ph10-six.component";
import { Y15ph10ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-three/y15ph10-three.component";
import { Y15ph10TwoComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 10/y15ph10-two/y15ph10-two.component";
import { Y15ph11EightComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-eight/y15ph11-eight.component";
import { Y15ph11FiveComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-five/y15ph11-five.component";
import { Y15ph11FourComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-four/y15ph11-four.component";
import { Y15ph11OneComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-one/y15ph11-one.component";
import { Y15ph11SevenComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-seven/y15ph11-seven.component";
import { Y15ph11SixComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-six/y15ph11-six.component";
import { Y15ph11ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-three/y15ph11-three.component";
import { Y15ph11TwoComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 11/y15ph11-two/y15ph11-two.component";
import { Y15ph12EightComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-eight/y15ph12-eight.component";
import { Y15ph12FiveComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-five/y15ph12-five.component";
import { Y15ph12FourComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-four/y15ph12-four.component";
import { Y15ph12OneComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-one/y15ph12-one.component";
import { Y15ph12SevenComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-seven/y15ph12-seven.component";
import { Y15ph12SixComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-six/y15ph12-six.component";
import { Y15ph12ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-three/y15ph12-three.component";
import { Y15ph12TwoComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 12/y15ph12-two/y15ph12-two.component";
import { Y15ph9EightComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-eight/y15ph9-eight.component";
import { Y15ph9FiveComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-five/y15ph9-five.component";
import { Y15ph9FourComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-four/y15ph9-four.component";
import { Y15ph9OneComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-one/y15ph9-one.component";
import { Y15ph9SevenComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-seven/y15ph9-seven.component";
import { Y15ph9SixComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-six/y15ph9-six.component";
import { Y15ph9ThreeComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-three/y15ph9-three.component";
import { Y15ph9TwoComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/grade 9/y15ph9-two/y15ph9-two.component";
import { Y15G12AllComponent } from "src/app/Exams/EUEE/physics/byYear/phy2015/y15-g12-all/y15-g12-all.component";


export const Ph2015Router=
{
  path:"2015",
  children:[
    {
      path:"all",
      component:Y15G12AllComponent
    },
    {
      path:"9",
      children:[
        {
          path:"one",
          component:Y15ph9OneComponent
        },
        {
          path:"two",
          component:Y15ph9TwoComponent
        },
        {
          path:"three",
          component:Y15ph9ThreeComponent
        },
        {
          path:"four",
          component:Y15ph9FourComponent
        },
        {
          path:"five",
          component:Y15ph9FiveComponent
        },
        {
          path:"six",
          component:Y15ph9SixComponent
        },
        {
          path:"seven",
          component:Y15ph9SevenComponent
        },
        {
          path:"eight",
          component:Y15ph9EightComponent
        },

      ]
    },
    {
      path:"10",
      children:[
        {
          path:"one",
          component:Y15ph10OneComponent
        },
        {
          path:"two",
          component:Y15ph10TwoComponent
        },
        {
          path:"three",
          component:Y15ph10ThreeComponent
        },
        {
          path:"four",
          component:Y15ph10FourComponent
        },
        {
          path:"five",
          component:Y15ph10FiveComponent
        },
        {
          path:"six",
          component:Y15ph10SixComponent
        },
        {
          path:"seven",
          component:Y15ph10SevenComponent
        },
        {
          path:"eight",
          component:Y15ph10EightComponent
        },
      ]
    },
    {
      path:"11",
      children:[

        {
          path:"one",
          component:Y15ph11OneComponent
        },
        {
          path:"two",
          component:Y15ph11TwoComponent
        },
        {
          path:"three",
          component:Y15ph11ThreeComponent
        },
        {
          path:"four",
          component:Y15ph11FourComponent
        },
        {
          path:"five",
          component:Y15ph11FiveComponent
        },
        {
          path:"six",
          component:Y15ph11SixComponent
        },
        {
          path:"seven",
          component:Y15ph11SevenComponent
        },
        {
          path:"eight",
          component:Y15ph11EightComponent
        },


      ]
    },
    {
      path:"12",
      children:[
        {
          path:"one",
          component:Y15ph12OneComponent
        },
        {
          path:"two",
          component:Y15ph12TwoComponent
        },
        {
          path:"three",
          component:Y15ph12ThreeComponent
        },
        {
          path:"four",
          component:Y15ph12FourComponent
        },
        {
          path:"five",
          component:Y15ph12FiveComponent
        },
        {
          path:"six",
          component:Y15ph12SixComponent
        },
        {
          path:"seven",
          component:Y15ph12SevenComponent
        },
        {
          path:"eight",
          component:Y15ph12EightComponent
        },
  ]
},
]

}
