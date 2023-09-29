import { Component,Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private route:Router){
    console.log(this.route.getCurrentNavigation()!.extras.state);
  }
  moreButtonExamshidden=true;

  navigatebutton(){
     this.route.navigate(["freshman/homepage"]);
     console.log("navigate DEri")
  }



  public onTap() {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "firstname": "Nic",
            "lastname": "Raboy"
        }
    };
    this.route.navigateByUrl("freshman/homepage", navigationExtras);
}






  showHideButton(){
    if(this.moreButtonExamshidden===true) {
      this.moreButtonExamshidden=false;
    }
    else{
      this.moreButtonExamshidden=true;
    }
  }
@Input() navigations:any=[

]
}
