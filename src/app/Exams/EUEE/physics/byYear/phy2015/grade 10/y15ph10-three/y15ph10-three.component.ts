import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph10-three',
  templateUrl: './y15ph10-three.component.html',
  styleUrls: ['./y15ph10-three.component.css']
})
export class Y15ph10ThreeComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Three"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","10","Chapter","Three").subscribe((data:any) =>{

        this.exams = data;
       });}

}
