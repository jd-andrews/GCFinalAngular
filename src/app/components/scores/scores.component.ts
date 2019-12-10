import { Component, OnInit } from "@angular/core";
import { QuestionService } from "src/app/services/question.service";
import { FacesService } from "src/app/services/faces.service";
import { Player } from "src/app/interfaces/player";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  yourScore: number;
  yourPlayer: Player;
  highScores: any[] = [];
  averageScore: number;

  constructor(
    private questionService: QuestionService,
    private faceService: FacesService
  ) {}

  setPlayer() {
    this.yourPlayer = this.faceService.getNewPlayer();
    console.log(this.yourPlayer);
    this.yourPlayer.playerScore = this.yourScore;
    console.log("players", this.yourPlayer.playerScore);
  }
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

  getHighScores() {
    // this.faceService.addPlayer().subscribe();
    this.questionService.getScoreAvg().subscribe(average => {
      this.averageScore = parseInt(average[0].avg);
    });
    this.questionService.getHighScores().subscribe(scores => {
      this.highScores = scores;
      console.log(this.highScores);
    });
  }
  ngOnInit() {
    this.getScore();
    this.setPlayer();
    this.faceService.addPlayer().subscribe();
    this.getHighScores();
  }
}
