import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {


//  @Input() myquestion="what is the meaning of living things?"


 @Input() Subject=""
  @Input() exams:any;
  @Input() subTitle:any;
  @Input() subgrade:any;
  @Input() subTopic:any;
  exam:any;


 mytitle0='der'
 title='';
 answer=true;
 getTitle(choice:any){
   console.log(choice.isAnswer);
   if(choice.isAnswer){
     this.title = this.title + 1;
     console.log(this.title);}
   console.log(this.title);
   }
   buttonexplanationshows=true;
   explanationContenthide=true;
   isExplanation=false;
   hide=""
 dataMatch=0;

   buttonexplans(data:number){
     this.dataMatch = data;


   }

   buttonexplanation(data:number){
     if(this.explanationContenthide==true){
       this.explanationContenthide=false;
     }
     else{
       this.explanationContenthide=true;
     }
   }
   SubmitButton(){

       this.buttonexplanationshows=false;
     }


 checkCorrect(option:boolean){
  const result=this.answer=option

  console.log(this.answer);
  return result;
 }
 score=0;
myMapResult = new Map<string, number>();
 TotalValue=0;
results:any=new Set()
 getvalue(da:any){
  let  valueData=0;
   // this.valueData=(da.target as HTMLInputElement).value;
   console.log(da)
 console.log(`Clicked value:${da.value}`)
 console.log(`This exams length ${this.exams.length}`)
 console.log(`question_no:${da.name}`)
 for (var i=0; i<this.exams.length; i++) {
       console.log(`question_no_id:${this.exams[i].id }`)
       if(this.exams[i].id==da.name && da.value==this.exams[i].CorrectAnswer && !(da.value  in this.results)){
         this.myMapResult.set(`${this.exams[i].id}`,da.value)
         this.results.add(da.value);
         console.log(`check Correct Answer:${ i in this.results}`)
       }
       else if(this.exams[i].id==da.name && da.value!=this.exams[i].CorrectAnswer){
         this.myMapResult.delete(`${this.exams[i].id}`)

       }
      this.results = this.results

   this.TotalValue+=valueData
   for (var j=0; j<this.exams[i].choice.length; j++) {
     if (da.name==this.exams[i].id && da.value==this.exams[i].CorrectAnswer){
       valueData=1;

       valueData=1;
       break;
     }
      else if( da.value!=this.exams[i].CorrectAnswer){
     valueData=0;

   }

   }

this.score=this.myMapResult.size
   console.log(`Correct Answer:${this.myMapResult}`)
 }

 }
ismatchData(){
 console.log(`This exams length ${this.exams.length}`)
}






}
