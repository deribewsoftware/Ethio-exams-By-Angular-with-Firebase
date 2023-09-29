import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph11-six',
  templateUrl: './y15ph11-six.component.html',
  styleUrls: ['./y15ph11-six.component.css']
})
export class Y15ph11SixComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Six"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","11","Chapter","Six").subscribe((data:any) =>{

        this.exams = data;
       });}

}
