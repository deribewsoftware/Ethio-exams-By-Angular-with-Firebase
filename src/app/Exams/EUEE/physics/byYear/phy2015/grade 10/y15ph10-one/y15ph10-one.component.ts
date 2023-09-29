import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph10-one',
  templateUrl: './y15ph10-one.component.html',
  styleUrls: ['./y15ph10-one.component.css']
})
export class Y15ph10OneComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter One"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","10","Chapter","One").subscribe((data:any) =>{

        this.exams = data;
       });}

}
