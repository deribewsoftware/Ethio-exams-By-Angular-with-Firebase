import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph12-two',
  templateUrl: './y15ph12-two.component.html',
  styleUrls: ['./y15ph12-two.component.css']
})
export class Y15ph12TwoComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Two"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","12","Chapter","Two").subscribe((data:any) =>{

        this.exams = data;
       });}
}
