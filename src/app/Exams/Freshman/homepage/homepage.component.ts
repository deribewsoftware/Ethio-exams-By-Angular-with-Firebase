import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  navigation:any[]=[
    {
      "navRoute":"/euee/homepage",
      "navLabel":"EUEE"
    },
    {
    "navRoute":"/euee/physics/year/2015",
    "navLabel":"All"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Grade 9"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Grade 10"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Grade 11"
  },
  {
    "navRoute":"iioio",
    "navLabel":"Grade 12"
  },


]

}
