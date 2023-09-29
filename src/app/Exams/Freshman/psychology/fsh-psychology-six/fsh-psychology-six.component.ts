import { Component } from '@angular/core';
import { FreshmanServiceService } from '../../freshman-service.service';

@Component({
  selector: 'app-fsh-psychology-six',
  templateUrl: './fsh-psychology-six.component.html',
  styleUrls: ['./fsh-psychology-six.component.css']
})
export class FshPsychologySixComponent {
  constructor(private service:FreshmanServiceService){}
  exams:any;

  ngOnInit():void {
    this.service.getFreshmanExams("Subject",'Psychology',"Chapter",'Six').subscribe((data:any) =>{

     this.exams = data;
    });}

}
