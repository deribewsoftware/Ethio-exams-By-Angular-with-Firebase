import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y10-all',
  templateUrl: './y10-all.component.html',
  styleUrls: ['./y10-all.component.css']
})
export class Y10AllComponent {
  constructor(private examsService:ExamsModelService){}

Subject="Physics"
subTitle="2010/2018"
   exams:any;

  ngOnInit():void {
     this.examsService.getExamsByYear("Subject","Physics","Year","2010").subscribe((data:any) =>{

      this.exams = data;
     });

  }

  menuLists:any[]=[

    {
    "navRoute":"/euee/physics/2015/all",
    "navLabel":"2015/2023 exams"
  },
  {
    "navRoute":"/euee/physics/2014/all",
    "navLabel":"2014/2022 exams"
  },
  {
    "navRoute":"/euee/physics/2013/all",
    "navLabel":"2013/2021 exams"
  },
  {
    "navRoute":"/euee/physics/2012/all",
    "navLabel":"2012/2020 exams"
  },{
    "navRoute":"/euee/physics/2011/all",
    "navLabel":"2011/2019 exams"
  },
  {
    "navRoute":"/euee/physics/2010/all",
    "navLabel":"2010/2018 exams"
  }]

 navigation:any[]=[
    {
      "navRoute":"/euee/homepage",
      "navLabel":"EUEE"
    },
    {
    "navRoute":"/euee/physics/2010/all",
    "navLabel":"All"
  },
  {
    "navRoute":"/euee/physics/2010/9/one",
    "navLabel":"Grade 9"
  },
  {
    "navRoute":"/euee/physics/2010/10/one",
    "navLabel":"Grade 10"
  },
  {
    "navRoute":"/euee/physics/2010/11/one",
    "navLabel":"Grade 11"
  },
  {
    "navRoute":"/euee/physics/2010/12/one",
    "navLabel":"Grade 12"
  },]


}
