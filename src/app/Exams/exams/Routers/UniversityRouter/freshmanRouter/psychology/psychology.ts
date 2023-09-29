import { FshPsychologyEightComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-eight/fsh-psychology-eight.component";
import { FshPsychologyFiveComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-five/fsh-psychology-five.component";
import { FshPsychologyFourComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-four/fsh-psychology-four.component";
import { FshPsychologyOneComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-one/fsh-psychology-one.component";
import { FshPsychologySevenComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-seven/fsh-psychology-seven.component";
import { FshPsychologySixComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-six/fsh-psychology-six.component";
import { FshPsychologyThreeComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-three/fsh-psychology-three.component";
import { FshPsychologyTwoComponent } from "src/app/Exams/Freshman/psychology/fsh-psychology-two/fsh-psychology-two.component";

export const PsychologyRouter={
  path:"psychology",
  children:[
    {path:'one',component:FshPsychologyOneComponent},
    {path:'two',component:FshPsychologyTwoComponent},
    {path:'three',component:FshPsychologyThreeComponent},
    {path:'four',component:FshPsychologyFourComponent},
    {path:'five',component:FshPsychologyFiveComponent},
    {path:'six',component:FshPsychologySixComponent},
    {path:'seven',component:FshPsychologySevenComponent},
    {path:'eight',component:FshPsychologyEightComponent},



  ]
}
