import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  currentScoreArr: any[] = [];
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
  getRating(id, num): Observable<any> {
    console.log("sevice ID", id);
    console.log("service num", num);
    return this.http.get(`http://localhost:3003/ratingnum${num}/${id}`);
  }

  setCurrentScore(id, num): void {
    this.getRating(id, num).subscribe(data => {
      let addNum = Number(data);
      this.currentScoreArr.push(addNum);

      // return (addNum = data);
      console.log("data", data);
      console.log("addNum", addNum);
      console.log("current score", this.currentScoreArr);
    });
  }
  getCurrentScore(): any[] {
    return this.currentScoreArr;
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
