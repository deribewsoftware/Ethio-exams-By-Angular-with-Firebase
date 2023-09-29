import { Component } from '@angular/core';

import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-one',
  templateUrl: './fsh-psychology-one.component.html',
  styleUrls: ['./fsh-psychology-one.component.css']
})
export class FshPsychologyOneComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'One').subscribe((data:any) =>{

     this.exams = data;
    });}

}
