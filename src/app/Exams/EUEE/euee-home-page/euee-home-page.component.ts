import { Component } from '@angular/core';

@Component({
  selector: 'app-euee-home-page',
  templateUrl: './euee-home-page.component.html',
  styleUrls: ['./euee-home-page.component.css']
})
export class EueeHomePageComponent {
  isHidden= true;

  navigation:any[]=[
    {
      "navRoute":"/euee/homepage",
      "navLabel":"EUEE"
    },
    {
    "navRoute":"/euee/physics/2015/all",
    "navLabel":"English"
  },
  {
    "navRoute":"Mathematics",
    "navLabel":"Mathematics"
  },
  {
    "navRoute":"Physics",
    "navLabel":"SAT"
  },
  {
    "navRoute":"/euee/physics/2015/all",
    "navLabel":"Physics"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Chemistry"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Biology"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Civics"
  },


]
}
