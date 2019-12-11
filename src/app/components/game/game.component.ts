import { Component, OnInit } from "@angular/core";
import { QuestionService } from "src/app/services/question.service";
import { Routes, RouterModule, Router } from "@angular/router";
import { FacesService } from "src/app/services/faces.service";
import { Player } from "src/app/interfaces/player";
import { resetFakeAsyncZone } from "@angular/core/testing";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  randQuestions: any[] = [];
  // questionCounter: number = Math.floor(Math.random() * 7);
  questionCounter: number = 0;
  availableQuestions: any[] = [];
  doneQuestions: any[] = [];
  qIndex: number;
  yourPlayer: Player;
  clickedOn: boolean = false;

  constructor(
    private questionService: QuestionService,
    private faceService: FacesService,
    private router: Router
  ) {}

  setPlayer() {
    this.yourPlayer = this.faceService.getNewPlayer();
    console.log(this.yourPlayer);
  }
  //// Method that sets the randQuestions on load
  getAllQuestions(): void {
    this.questionService.getAllQuestions().subscribe(questions => {
      this.randQuestions = questions;
    });
  }

  //// method taht pushes
  getAllIDs(): void {
    this.questionService.getAllQuestions().subscribe(questions => {
      for (let i = 0; i < questions.length; i++) {
        this.availableQuestions.push(questions[i].id);
      }
      let newNum = this.availableQuestions.splice(
        Math.floor(Math.random() * this.availableQuestions.length),
        1
      );
      this.qIndex = newNum[0] - 1;
      this.doneQuestions.push(newNum[0]);
      console.log("qindex", this.qIndex);
    });
  }
  Clicked() {
    // this.clickedOn = !this.;
  }
  nextQuestion(scenarioNumber: number): void {
    if ((this.clickedOn = false)) {
      this.clickedOn = !this.clickedOn;
    }

    // this.clickedOn = !this.clickedOn;

    console.log(this.clickedOn);
    let questionID: number = this.randQuestions[this.qIndex].id;
    ////// Second iteration of randomization with availableQuestions and doneQuestions, takes
    ///////// one from one and adds to the other
    /// Uses scenario number to upvote either scenario based on choice
    this.questionService.ratingPlusOne(questionID, scenarioNumber).subscribe();
    //// setting current score
    this.questionService.setCurrentScore(questionID, scenarioNumber);
    /// if/else statement that decides whether to navigate away when
    /// the number of questions meets the max allowed, or change questions and
    /// log that to an array, or to populate the questions in an array if none
    /// exist
    if (this.doneQuestions.length === 6) {
      this.router.navigate(["/scores"]);
      this.doneQuestions = [];
    } else if (this.availableQuestions.length) {
      let newNum = this.availableQuestions.splice(
        Math.floor(Math.random() * this.availableQuestions.length),
        1
      );
      this.questionCounter++;
      this.qIndex = newNum[0] - 1;
      this.doneQuestions.push(newNum[0]);
    } else if (this.availableQuestions.length === 0) {
      this.getAllIDs();
    }
    // this.clickedOn = !this.clickedOn;
    console.log(this.clickedOn);
    /////First iteration of randomization with countCheck Array
    // let newNum = Math.floor(Math.random() * 5);
    // if (this.countCheck.find(number => number === newNum) === undefined) {
    //   this.questionCounter = newNum;
    //   this.countCheck = [...this.countCheck, newNum];
    // }
    // console.log(this.countCheck);
    // this.questionCounter++;
  }

  ngOnInit() {
    this.setPlayer();
    this.getAllQuestions();
    this.getAllIDs();
  }
}
