import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-y15-g12',
  templateUrl: './y15-g12.component.html',
  styleUrls: ['./y15-g12.component.css']
})
export class Y15G12Component {



  @Input() subTitle:any;
  @Input() exams:any;
  @Input() menuLists:any;




    navigation:any[]=[
      {
        "navRoute":"/euee/homepage",
        "navLabel":"EUEE"
      },
      {
      "navRoute":"/euee/physics/2015/all",
      "navLabel":"All"
    },
    {
      "navRoute":"/euee/physics/2015/9/one",
      "navLabel":"Grade 9"
    },
    {
      "navRoute":"/euee/physics/2015/10/one",
      "navLabel":"Grade 10"
    },
    {
      "navRoute":"/euee/physics/2015/11/one",
      "navLabel":"Grade 11"
    },
    {
      "navRoute":"/euee/physics/2015/12/one",
      "navLabel":"Grade 12"
    },]



}
