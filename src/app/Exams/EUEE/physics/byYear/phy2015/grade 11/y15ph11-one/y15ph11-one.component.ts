import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph11-one',
  templateUrl: './y15ph11-one.component.html',
  styleUrls: ['./y15ph11-one.component.css']
})
export class Y15ph11OneComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter One"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","11","Chapter","One").subscribe((data:any) =>{

        this.exams = data;
       });}

}
