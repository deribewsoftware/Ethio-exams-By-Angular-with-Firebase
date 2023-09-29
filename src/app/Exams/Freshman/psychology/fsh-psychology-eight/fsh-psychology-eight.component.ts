import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-eight',
  templateUrl: './fsh-psychology-eight.component.html',
  styleUrls: ['./fsh-psychology-eight.component.css']
})
export class FshPsychologyEightComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Eight').subscribe((data:any) =>{

     this.exams = data;
    });}

}
