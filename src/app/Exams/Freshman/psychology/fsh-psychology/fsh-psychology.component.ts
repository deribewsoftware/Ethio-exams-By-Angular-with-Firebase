import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fsh-psychology',
  templateUrl: './fsh-psychology.component.html',
  styleUrls: ['./fsh-psychology.component.css']
})
export class FshPsychologyComponent {

 Subject="Psychology";



 @Input() exams:any;
 @Input() subTitle:any;
 @Input() subTopic:any;
 @Input() subgrade:any;


  menuLists:any[]=[

    {
    "navRoute":"/freshman/psychology/one",
    "navLabel":"Chapter-One"
  },
  {
    "navRoute":"/freshman/psychology/two",
    "navLabel":"Chapter-Two"
  },
  {
    "navRoute":"/freshman/psychology/three",
    "navLabel":"Chapter-Three"
  },
  {
    "navRoute":"/freshman/psychology/four",
    "navLabel":"Chapter-Four"
  },{
    "navRoute":"/freshman/psychology/five",
    "navLabel":"Chapter-Five"
  },
  {
    "navRoute":"/freshman/psychology/six",
    "navLabel":"Chapter-Six"
  }, {
    "navRoute":"/freshman/psychology/seven",
    "navLabel":"Chapter-Seven"
  }, {
    "navRoute":"/freshman/psychology/eight",
    "navLabel":"Chapter-Eight"
  }]


}
