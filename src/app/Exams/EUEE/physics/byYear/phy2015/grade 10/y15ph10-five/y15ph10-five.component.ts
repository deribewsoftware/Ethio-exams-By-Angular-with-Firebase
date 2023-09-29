import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph10-five',
  templateUrl: './y15ph10-five.component.html',
  styleUrls: ['./y15ph10-five.component.css']
})
export class Y15ph10FiveComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Five"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","10","Chapter","Five").subscribe((data:any) =>{

        this.exams = data;
       });}

}
