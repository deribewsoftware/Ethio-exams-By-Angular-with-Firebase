import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph9-seven',
  templateUrl: './y15ph9-seven.component.html',
  styleUrls: ['./y15ph9-seven.component.css']
})
export class Y15ph9SevenComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Seven"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","9","Chapter","Seven").subscribe((data:any) =>{

        this.exams = data;
       });}

}
