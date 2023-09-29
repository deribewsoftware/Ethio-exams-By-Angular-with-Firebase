import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamsModelService {


  constructor(private http: HttpClient){}
  url='http://localhost:3000/exams';
  getExamsByYear(Subject: string,subject:string, Year: string,year:string){
    let SearchParam=new HttpParams();
    SearchParam=SearchParam.append(Subject,subject);
    SearchParam=SearchParam.append(Year,year);
    // ,{params:SearchParam}
    return this.http.get(this.url,{params:SearchParam})
  }

  getExamsByByChapter(Subject: string,subject:string, Year: string,year:string,Grade: string,grade:string,Chapter: string,chapter:string){
    let SearchParam=new HttpParams();
    SearchParam=SearchParam.append(Subject,subject);
    SearchParam=SearchParam.append(Year,year);
    SearchParam=SearchParam.append(Grade,grade);
    SearchParam=SearchParam.append(Chapter,chapter);
    // ,{params:SearchParam}
    return this.http.get(this.url,{params:SearchParam})
  }
}
