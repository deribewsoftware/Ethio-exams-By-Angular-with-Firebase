import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fresh-home-page',
  templateUrl: './fresh-home-page.component.html',
  styleUrls: ['./fresh-home-page.component.css']
})
export class FreshHomePageComponent {




  public firstname="Deribew";
  public lastname: any;

  public constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params:any) => {
          this.firstname = params["firstname"];
          this.lastname = params["lastname"];
      });
  }










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
