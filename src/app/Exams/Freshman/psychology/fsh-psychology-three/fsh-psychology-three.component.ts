import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-three',
  templateUrl: './fsh-psychology-three.component.html',
  styleUrls: ['./fsh-psychology-three.component.css']
})
export class FshPsychologyThreeComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Three').subscribe((data:any) =>{

     this.exams = data;
    });}

}
