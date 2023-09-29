import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-seven',
  templateUrl: './fsh-psychology-seven.component.html',
  styleUrls: ['./fsh-psychology-seven.component.css']
})
export class FshPsychologySevenComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Seven').subscribe((data:any) =>{

     this.exams = data;
    });}

}
