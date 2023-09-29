import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  constructor(private examsService:ExamsModelService){}

  Subject="Physics"
  subTitle="2015/2023"
     exams:any;

    ngOnInit():void {
       this.examsService.getExamsByYear("Subject","Physics","Year","2010").subscribe((data:any) =>{

        this.exams = data;
       });

    }

    menuLists:any[]=[

      {
      "navRoute":"/euee/physics/year/2015",
      "navLabel":"2015/2023 exams"
    },
    {
      "navRoute":"/euee/physics/year/2014",
      "navLabel":"2014/2022 exams"
    },
    {
      "navRoute":"/euee/physics/year/2013",
      "navLabel":"2013/2021 exams"
    },
    {
      "navRoute":"/euee/physics/year/2012",
      "navLabel":"2012/2020 exams"
    },{
      "navRoute":"/euee/physics/year/2011",
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
      "navRoute":"/euee/physics/grade/12/one",
      "navLabel":"Grade 12"
    },]
}
