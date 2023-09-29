import { Component } from '@angular/core';
import { ExamsModelService } from 'src/app/Exams/EUEE/exams-model.service';

@Component({
  selector: 'app-y15ph9-four',
  templateUrl: './y15ph9-four.component.html',
  styleUrls: ['./y15ph9-four.component.css']
})
export class Y15ph9FourComponent {
  constructor(private examsService:ExamsModelService){}
  subTitle="Chapter Four"
     exams:any;
ngOnInit():void {
       this.examsService.getExamsByByChapter("Subject","Physics","Year","2015","Grade","9","Chapter","Four").subscribe((data:any) =>{

        this.exams = data;
       });}

}
