import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phy-y15-g12',
  templateUrl: './phy-y15-g12.component.html',
  styleUrls: ['./phy-y15-g12.component.css']
})
export class PhyY15G12Component {


  @Input() subTitle:any;
  @Input() exams:any;
   menuLists:any[]=[

      {
      "navRoute":"/euee/physics/2015/12/one",
      "navLabel":"Chapter-One"
    },
    {
      "navRoute":"/euee/physics/2015/12/two",
      "navLabel":"Chapter-Two"
    },
    {
      "navRoute":"/euee/physics/2015/12/three",
      "navLabel":"Chapter-Three"
    },
    {
      "navRoute":"/euee/physics/2015/12/four",
      "navLabel":"Chapter-Four"
    },{
      "navRoute":"/euee/physics/2015/12/five",
      "navLabel":"Chapter-Five"
    },
    {
      "navRoute":"/euee/physics/2015/12/six",
      "navLabel":"Chapter-Six"
    }, {
      "navRoute":"/euee/physics/2015/12/seven",
      "navLabel":"Chapter-Seven"
    }, {
      "navRoute":"/euee/physics/2015/12/eight",
      "navLabel":"Chapter-Eight"
    }]


}
