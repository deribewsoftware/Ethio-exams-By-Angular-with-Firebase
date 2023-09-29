import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent {
  @Input() navigation:any;
  @Input() Subject:any;
  @Input() menuLists:any;
  @Input() exams:any;
  @Input() subTitle:any;
  @Input() subTopic:any;
  @Input() subgrade:any;



}
