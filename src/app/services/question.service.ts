import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "../interfaces/player";
import { Pairing } from "../interfaces/pairing";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  // newPairing: Pairing = {
  //   scenario: "",
  //   scenario2: "",
  //   rating: 0,
  //   rating2: 0
  // };
  constructor(private http: HttpClient) {}
  currentScoreArr: any[] = [];

  /// sets new questions for table
  // setNewPairing(scenario: string, scenario2: string) {
  //   this.newPairing.scenario = scenario;
  //   this.newPairing.scenario2 = scenario2;
  //   this.newPairing.rating = 1;
  //   this.newPairing.rating2 = 1;
  //   console.log(this.newPairing);
  // }
  //// gets all questions from Database for the array

  getAllQuestions(): Observable<any> {
    return this.http.get(`http://localhost:3003/questions/`);
  }

  addQuestions(scenario, scenario2): Observable<any> {
    let newPairing: Pairing = {
      scenario: "",
      scenario2: "",
      rating: 0,
      rating2: 0
    };
    newPairing.scenario = scenario;
    newPairing.scenario2 = scenario2;
    newPairing.rating = 1;
    newPairing.rating2 = 1;
    console.log(newPairing);
    return this.http.post("http://localhost:3003/add-question", newPairing);
  }

  //// adds one to whatever scenario was chosen
  ratingPlusOne(id, scenario): Observable<void> {
    return this.http.put<void>(
      `http://localhost:3003/rating${scenario}/${id}`,
      ""
    );
  }

  //// resets score when navigating away from page
  resetScoreArr(): void {
    this.currentScoreArr = [];
  }

  //// get's rating to use in totalling score
  getRating(id, num): Observable<any> {
    console.log("sevice ID", id);
    console.log("service num", num);
    return this.http.get(`http://localhost:3003/ratingnum${num}/${id}`);
  }

  //// gets score in an array in order to calculate on the score page
  setCurrentScore(id, num): void {
    this.getRating(id, num).subscribe(data => {
      let addNum = Number(data);
      this.currentScoreArr.push(addNum);
    });
  }

  //// sends the currentScoreArr from the service for score total
  getCurrentScore(): any[] {
    return this.currentScoreArr;
  }

  //// Gets high scores
  getHighScores(): Observable<any> {
    return this.http.get("http://localhost:3003/top-ten");
  }

  //// Gets low scores
  getLowScores(): Observable<any> {
    return this.http.get("http://localhost:3003/bottom-ten");
  }
  //// Gets average of scores
  getScoreAvg(): Observable<any> {
    return this.http.get("http://localhost:3003/avg-score");
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
