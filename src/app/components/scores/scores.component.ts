import { Component, OnInit } from "@angular/core";
import { QuestionService } from "src/app/services/question.service";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  yourScore: number;

  constructor(private questionService: QuestionService) {}

  getScore() {
    this.yourScore = this.toSum(this.questionService.getCurrentScore());
    console.log(this.yourScore);
  }

  resetScore() {
    this.questionService.resetScoreArr();
  }

  toSum(numArr: any[]): number {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    return sum;
  }
  ngOnInit() {
    this.getScore();
  }
}
