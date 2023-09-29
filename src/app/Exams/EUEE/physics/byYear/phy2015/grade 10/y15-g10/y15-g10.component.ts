import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-y15-g10',
  templateUrl: './y15-g10.component.html',
  styleUrls: ['./y15-g10.component.css']
})
export class Y15G10Component {
  
  @Input() subTitle="Chapter One"
  @Input() exams:any;


   menuLists:any[]=[

      {
      "navRoute":"/euee/physics/2015/10/one",
      "navLabel":"Chapter-One"
    },
    {
      "navRoute":"/euee/physics/2015/10/two",
      "navLabel":"Chapter-Two"
    },
    {
      "navRoute":"/euee/physics/2015/10/three",
      "navLabel":"Chapter-Three"
    },
    {
      "navRoute":"/euee/physics/2015/10/four",
      "navLabel":"Chapter-Four"
    },{
      "navRoute":"/euee/physics/2015/10/five",
      "navLabel":"Chapter-Five"
    },
    {
      "navRoute":"/euee/physics/2015/10/six",
      "navLabel":"Chapter-Six"
    }, {
      "navRoute":"/euee/physics/2015/10/seven",
      "navLabel":"Chapter-Seven"
    }, {
      "navRoute":"/euee/physics/2015/10/eight",
      "navLabel":"Chapter-Eight"
    }]




}
