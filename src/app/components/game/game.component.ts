import { Component, OnInit } from "@angular/core";
import { QuestionService } from "src/app/services/question.service";
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  randQuestions: any[];
  questionCounter: number = 0;
  availableQuestions: any[] = [];
  doneQuestions: any[] = [];
  qIndex: number = 0;
  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  getAllQuestions(): void {
    this.questionService.getAllQuestions().subscribe(questions => {
      this.randQuestions = questions;
    });
  }
  getAllIDs(): void {
    this.questionService.getAllQuestions().subscribe(questions => {
      for (let i = 0; i <= questions.length; i++) {
        this.availableQuestions.push(questions[i].id);
      }
    });
  }

  nextQuestion(scenarioNumber: number): void {
    ////// Second iteration of randomization with availableQuestions and doneQuestions, takes
    ///////// one from one and adds to the other
    /// Uses scenario number to upvote either scenario based on choice
    // this.questionService.ratingPlusOne(this.qIndex, scenarioNumber).subscribe();
    /// if/else statement that decides whether to navigate away when
    /// the number of questions meets the max allowed, or change questions and
    /// log that to an array, or to populate the questions in an array if none
    /// exist
    if (this.doneQuestions.length === 5) {
      this.router.navigate(["/scores"]);
      this.doneQuestions = [];
    } else if (this.availableQuestions.length) {
      console.log(this.availableQuestions);
      let newNum = this.availableQuestions.splice(
        Math.floor(Math.random() * this.availableQuestions.length),
        1
      );
      this.questionCounter++;
      this.qIndex = newNum[0] - 1;
      this.doneQuestions.push(newNum[0]);

      console.log(this.availableQuestions);
    } else if (this.availableQuestions.length === 0) {
      console.log(this.questionCounter);
      this.getAllIDs();
    }
    console.log(this.questionCounter);
    console.log(this.doneQuestions);
    /////First iteration of randomization with countCheck Array
    // let newNum = Math.floor(Math.random() * 5);
    // if (this.countCheck.find(number => number === newNum) === undefined) {
    //   this.questionCounter = newNum;
    //   this.countCheck = [...this.countCheck, newNum];
    // }
    // console.log(this.countCheck);
    // this.questionCounter++;
  }

  endQuestions(): void {
    if ((this.questionCounter = 4)) {
      this.router.navigate(["/scores"]);
    }
  }

  ngOnInit() {
    this.getAllQuestions();
    this.getAllIDs();
  }
}
