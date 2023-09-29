import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph12-five',
  templateUrl: './y15ph12-five.component.html',
  styleUrls: ['./y15ph12-five.component.css']
})
export class Y15ph12FiveComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Five"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","12","Chapter","Five").subscribe((data:any) =>{

        this.exams = data;
       });}}
