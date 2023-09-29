import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y13ph',
  templateUrl: './y13ph.component.html',
  styleUrls: ['./y13ph.component.css']
})
export class Y13phComponent {
 constructor(private examsService:ExamsModelService){}

 exams:any;
  ngOnInit():void {
     this.examsService.getExamsByYear("Subject","Physics","Year","2013").subscribe((data:any) =>{

      this.exams = data;
     });

  }


  subTitle="2013/2021"
  navigation:any[]=[
    {
      "navRoute":"/euee/homepage",
      "navLabel":"EUEE"
    },
    {
    "navRoute":"/euee/physics/2013/all",
    "navLabel":"All"
  },
  {
    "navRoute":"/euee/physics/2013/9/one",
    "navLabel":"Grade 9"
  },
  {
    "navRoute":"/euee/physics/2013/10/one",
    "navLabel":"Grade 10"
  },
  {
    "navRoute":"/euee/physics/2013/11/one",
    "navLabel":"Grade 11"
  },
  {
    "navRoute":"/euee/physics/2013/12/one",
    "navLabel":"Grade 12"
  },]


}
