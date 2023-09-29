import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-y15-g11',
  templateUrl: './y15-g11.component.html',
  styleUrls: ['./y15-g11.component.css']
})
export class Y15G11Component {


  @Input() subTitle="Chapter One"
  @Input() exams:any;


   menuLists:any[]=[

      {
      "navRoute":"/euee/physics/2015/11/one",
      "navLabel":"Chapter-One"
    },
    {
      "navRoute":"/euee/physics/2015/11/two",
      "navLabel":"Chapter-Two"
    },
    {
      "navRoute":"/euee/physics/2015/11/three",
      "navLabel":"Chapter-Three"
    },
    {
      "navRoute":"/euee/physics/2015/11/four",
      "navLabel":"Chapter-Four"
    },{
      "navRoute":"/euee/physics/2015/11/five",
      "navLabel":"Chapter-Five"
    },
    {
      "navRoute":"/euee/physics/2015/11/six",
      "navLabel":"Chapter-Six"
    }, {
      "navRoute":"/euee/physics/2015/11/seven",
      "navLabel":"Chapter-Seven"
    }, {
      "navRoute":"/euee/physics/2015/11/eight",
      "navLabel":"Chapter-Eight"
    }]




}
