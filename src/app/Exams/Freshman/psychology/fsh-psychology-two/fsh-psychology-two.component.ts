import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-two',
  templateUrl: './fsh-psychology-two.component.html',
  styleUrls: ['./fsh-psychology-two.component.css']
})
export class FshPsychologyTwoComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Two').subscribe((data:any) =>{

     this.exams = data;
    });}

}
