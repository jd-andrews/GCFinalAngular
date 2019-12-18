import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { QuestionService } from "src/app/services/question.service";
import { Router } from "@angular/router";
import { Pairing } from "src/app/interfaces/pairing";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  questions: any[];
  clicked: boolean = false;
  bad: boolean = false;
  submitted: boolean = false;
  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
    private router: Router
  ) {}
  addScenario(pairForm: NgForm) {
    this.bad = this.checkBad(pairForm);
    if (this.bad) {
      console.log("breaking?");

      this.questionService.refreshBad();
      // this.submitted == this.checkBad(pairForm)
      return;
    } else {
      console.log("break");
      this.questionService
        .addQuestions(pairForm.value.scenario1, pairForm.value.scenario2)
        .subscribe();

      this.questionService.refreshBad();
      this.submitted = true;
      console.log(this.submitted);
      console.log(this.bad);
    }
  }

  checkBad(pairForm: NgForm) {
    var Filter = require("bad-words"),
      filter = new Filter();

    let words = filter.list;
    console.log("badwords length", words.length);
    let scenario1Str = pairForm.value.scenario1.toLowerCase();
    let scenario2Str = pairForm.value.scenario2.toLowerCase();

    for (let word of words) {
      if (scenario1Str.includes(word) === true) {
        console.log("bad sentence 1");
        this.bad = true;
        return true;
      } else {
        console.log("ok sentence 1");
      }
    }
    for (let word of words) {
      if (scenario2Str.includes(word) === true) {
        console.log("bad sentence 2");
        this.bad = true;
        return true;
      } else {
        console.log("ok sentence 2");
      }
    }
    return false;
  }
  showRecap() {
    this.clicked = !this.clicked;
  }
  goHome() {
    this.router.navigate(["/players"]);
  }
  // badWords(pairForm: NgForm) {
  //   var Filter = require("bad-words"),
  //     filter = new Filter();
  //   filter.addWords("some", "bad", "word");
  //   console.log(
  //     filter.clean(pairForm.value.scenario1, pairForm.value.scenario2)
  //   );
  // }

  refreshBad() {
    this.bad = false;
  }
  ngOnInit() {}
}
