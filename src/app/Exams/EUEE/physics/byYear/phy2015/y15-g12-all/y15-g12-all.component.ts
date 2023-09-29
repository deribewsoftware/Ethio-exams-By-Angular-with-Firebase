import { Component,Input } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15-g12-all',
  templateUrl: './y15-g12-all.component.html',
  styleUrls: ['./y15-g12-all.component.css']
})
export class Y15G12AllComponent {

  constructor(private examsService:ExamsModelService){}

 Subject="Physics"
 subTitle="2015/2023"
 exams:any;
ngOnInit():void {
     this.examsService.getExamsByYear("Subject","Physics","Year","2015").subscribe((data:any) =>{

      this.exams = data;
     });}


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
