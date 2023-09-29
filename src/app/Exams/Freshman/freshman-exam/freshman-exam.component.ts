import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-freshman-exam',
  templateUrl: './freshman-exam.component.html',
  styleUrls: ['./freshman-exam.component.css']
})
export class FreshmanExamComponent {



  @Input() Subject:any;
  @Input() menuLists:any;
  @Input() exams:any;
  @Input() subTitle:any;
  @Input() subTopic:any;
  @Input() subgrade:any;



  navigation:any[]=[
    {
      "navRoute":"/freshman/homepage",
      "navLabel":"Freshman Courses"
    },
    {
    "navRoute":"/euee/physics/year/2015",
    "navLabel":"English"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Mathematics"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Biology"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Chemistry"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Physics"
  },
  {
    "navRoute":"/freshman/psychology/one",
    "navLabel":"Psychology"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Logic"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Geograaphy"
  },
  {
    "navRoute":"iioio",
    "navLabel":"History"
  },



]


}
