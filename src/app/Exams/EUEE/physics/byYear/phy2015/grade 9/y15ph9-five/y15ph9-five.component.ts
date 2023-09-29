import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph9-five',
  templateUrl: './y15ph9-five.component.html',
  styleUrls: ['./y15ph9-five.component.css']
})
export class Y15ph9FiveComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Five"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","9","Chapter","Five").subscribe((data:any) =>{

        this.exams = data;
       });}

}
