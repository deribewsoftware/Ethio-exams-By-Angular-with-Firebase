import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-five',
  templateUrl: './fsh-psychology-five.component.html',
  styleUrls: ['./fsh-psychology-five.component.css']
})
export class FshPsychologyFiveComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Five').subscribe((data:any) =>{

     this.exams = data;
    });}

}
