import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph12-eight',
  templateUrl: './y15ph12-eight.component.html',
  styleUrls: ['./y15ph12-eight.component.css']
})
export class Y15ph12EightComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Eight"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","12","Chapter","Eight").subscribe((data:any) =>{

        this.exams = data;
       });}}
