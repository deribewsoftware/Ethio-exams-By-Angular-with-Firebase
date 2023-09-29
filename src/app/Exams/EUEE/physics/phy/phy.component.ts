import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-phy',
  templateUrl: './phy.component.html',
  styleUrls: ['./phy.component.css']
})
export class PhyComponent {




Subject="Physics"
@Input() subTitle="2015/2023"
@Input()  exams:any;
@Input()  menuLists:any[]=[
  
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

  @Input() navigation:any[]=[
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
