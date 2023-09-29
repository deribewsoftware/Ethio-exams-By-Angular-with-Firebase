import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private service:ExamModelService){}

  isDisplayMore = true;
  isHiddenUnveristy=true;
  displayUniveristy(){
    if(this.isHiddenUnveristy){
      this.isHiddenUnveristy = false;
    }
    else{
      this.isHiddenUnveristy = true;
    }
  }
  DisplayMore(){
    if(this.isDisplayMore){
      this.isDisplayMore = false;
    }
    else{
      this.isDisplayMore = true;
    }
  }
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


Univeristy:any=[
  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },


  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },


  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },

  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },
  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },


  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },


  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },

  {
    name:"Addis Ababa",
    logo:"../../assets/AAU.png"
  },
]







}
