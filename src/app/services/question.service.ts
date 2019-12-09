import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  currentScore: any;
  getAllQuestions(): Observable<any> {
    return this.http.get(`http://localhost:3003/questions/`);
  }
  ratingPlusOne(id, scenario): Observable<void> {
    return this.http.put<void>(
      `http://localhost:3003/rating${scenario}/${id}`,
      ""
    );
    // if (scenario === 1) {
    //   return this.http.put(`http://localhost:3002/rating1/${id}`);
    // } else {
    //   return this.http.put(`http://localhost:3002/rating2/${id}`);
    // }
  }
  getRating(num, id): Observable<any> {
    return this.http.get(`http://localhost:3003/ratingnum${num}/${id}`);
  }

  setCurrentScore(num, id): void {
    let addNum = this.getRating(num, id);
    console.log(addNum);
    this.currentScore += addNum;
    console.log(this.currentScore);
  }
  getCurrentScore(): number {
    return this.currentScore;
  }
  // getRandomQuestions(): Observable<any>[] {
  //   let twoQuestions: any[];
  //   for (let i = 0; i < 2; i++) {
  //     let randQ = this.http.get(`http://localhost:3002/questions/random`);
  //     twoQuestions.push(randQ);
  //   }
  //   return twoQuestions;
  // }
}
