import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph11-two',
  templateUrl: './y15ph11-two.component.html',
  styleUrls: ['./y15ph11-two.component.css']
})
export class Y15ph11TwoComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Two"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","11","Chapter","Two").subscribe((data:any) =>{

        this.exams = data;
       });}

}
