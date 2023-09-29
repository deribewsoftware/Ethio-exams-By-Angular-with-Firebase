import { Injectable } from '@angular/core';
import {AngularFirebase} from '@angular/fire/combat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExamModelService {
  constructor(private firebase:AngularFirebase){}

 getAllExam(){
  return this.firebase.collection('exams').snapshotChanges();

 }
}
