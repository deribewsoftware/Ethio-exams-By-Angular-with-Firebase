import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-four',
  templateUrl: './fsh-psychology-four.component.html',
  styleUrls: ['./fsh-psychology-four.component.css']
})
export class FshPsychologyFourComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Four').subscribe((data:any) =>{

     this.exams = data;
    });}

}
