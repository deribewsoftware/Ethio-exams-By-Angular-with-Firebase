import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y10ph12-four',
  templateUrl: './y10ph12-four.component.html',
  styleUrls: ['./y10ph12-four.component.css']
})
export class Y10ph12FourComponent {
  constructor(private examsService:ExamsModelService){}

  Subject="Physics"
  subTitle="Chapter Four"
     exams:any;

    ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2010","Grade","12","Chapter","Four").subscribe((data:any) =>{

        this.exams = data;
       });

    }

    menuLists:any[]=[

      {
      "navRoute":"/euee/physics/2010/12/one",
      "navLabel":"Chapter-One"
    },
    {
      "navRoute":"/euee/physics/2010/12/two",
      "navLabel":"Chapter-Two"
    },
    {
      "navRoute":"/euee/physics/2010/12/three",
      "navLabel":"Chapter-Three"
    },
    {
      "navRoute":"/euee/physics/2010/12/four",
      "navLabel":"Chapter-Four"
    },{
      "navRoute":"/euee/physics/2010/12/five",
      "navLabel":"Chapter-Five"
    },
    {
      "navRoute":"/euee/physics/2010/12/six",
      "navLabel":"Chapter-Six"
    }, {
      "navRoute":"/euee/physics/2010/12/seven",
      "navLabel":"Chapter-Seven"
    }, {
      "navRoute":"/euee/physics/2010/12/eight",
      "navLabel":"Chapter-Eight"
    }]

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
