import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-y15-g9',
  templateUrl: './y15-g9.component.html',
  styleUrls: ['./y15-g9.component.css']
})
export class Y15G9Component {

  @Input() subTitle="Chapter One"
  @Input() exams:any;


   menuLists:any[]=[

      {
      "navRoute":"/euee/physics/2015/9/one",
      "navLabel":"Chapter-One"
    },
    {
      "navRoute":"/euee/physics/2015/9/two",
      "navLabel":"Chapter-Two"
    },
    {
      "navRoute":"/euee/physics/2015/9/three",
      "navLabel":"Chapter-Three"
    },
    {
      "navRoute":"/euee/physics/2015/9/four",
      "navLabel":"Chapter-Four"
    },{
      "navRoute":"/euee/physics/2015/9/five",
      "navLabel":"Chapter-Five"
    },
    {
      "navRoute":"/euee/physics/2015/9/six",
      "navLabel":"Chapter-Six"
    }, {
      "navRoute":"/euee/physics/2015/9/seven",
      "navLabel":"Chapter-Seven"
    }, {
      "navRoute":"/euee/physics/2015/9/eight",
      "navLabel":"Chapter-Eight"
    }]




}
