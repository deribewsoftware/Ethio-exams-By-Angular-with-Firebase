import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph10-eight',
  templateUrl: './y15ph10-eight.component.html',
  styleUrls: ['./y15ph10-eight.component.css']
})
export class Y15ph10EightComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Eight"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","10","Chapter","Eight").subscribe((data:any) =>{

        this.exams = data;
       });}

}
