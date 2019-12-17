import { Component, OnInit, HostListener } from "@angular/core";
import { QuestionService } from "src/app/services/question.service";
import { FacesService } from "src/app/services/faces.service";
import { Player } from "src/app/interfaces/player";
import { Router } from "@angular/router";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  yourScore: number;
  yourPlayer: Player;
  highScores: any[] = [];
  lowScores: any[] = [];
  averageScore: number;
  clicked: boolean = false;
  outsideClicked: boolean = false;
  yourAnswers: any[] = [];
  category: string = "peeple";

  // otherAnswers: any[] = [];

  constructor(
    private questionService: QuestionService,
    private faceService: FacesService,
    private router: Router
  ) {}

  getAnswers() {
    this.yourAnswers = this.questionService.getYourAnswers();
    // this.otherAnswers = this.questionService.getOtherAnswers();
    this.questionService.resetAnswerArr();
  }
  showRecap() {
    this.clicked = !this.clicked;
  }

  setPlayer() {
    this.yourPlayer = this.faceService.getNewPlayer();
    console.log(this.yourPlayer);
    this.yourPlayer.playerScore = this.yourScore;
    this.yourPlayer.playerCategory = this.questionService.getCategory();
    this.category = this.yourPlayer.playerCategory;
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

  getScoreLists() {
    this.questionService.getScoreAvg().subscribe(average => {
      this.averageScore = parseInt(average.avg);
    });
    this.questionService.getHighScores().subscribe(scores => {
      this.highScores = scores;
      console.log(this.highScores);
    });
    this.questionService.getLowScores().subscribe(scores => {
      this.lowScores = scores;
    });
    if (this.yourPlayer.playerName === "") {
      console.log("doesnt");
      return;
    } else {
      console.log("works");
      this.faceService.addPlayer().subscribe();
    }
  }

  goHome() {
    this.router.navigate(["/players"]);
  }
  ngOnInit() {
    this.getAnswers();
    this.getScore();
    this.setPlayer();
    // this.faceService.addPlayer().subscribe();
    this.getScoreLists();
  }
}
