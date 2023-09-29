import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreshmanServiceService {

  constructor(private http: HttpClient){}
  url='http://localhost:3000/exams';
  getFreshmanExams(Subject: string,subject:string, Year: string,year:string){
    let SearchParam=new HttpParams();
    SearchParam=SearchParam.append("Department",'Freshman');
    SearchParam=SearchParam.append(Subject,subject);
    SearchParam=SearchParam.append(Year,year);
    // ,{params:SearchParam}
    return this.http.get(this.url,{params:SearchParam})
  }
}
