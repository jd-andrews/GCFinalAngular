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
    this.yourScore = this.questionService.getCurrentScore();
  }
  ngOnInit() {
    this.getScore();
  }
}
