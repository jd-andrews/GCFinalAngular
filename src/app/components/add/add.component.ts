import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { QuestionService } from "src/app/services/question.service";
import { Router } from "@angular/router";

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
    this.questionService
      .addQuestions(pairForm.value.scenario1, pairForm.value.scenario2)
      .subscribe();
    this.bad = this.questionService.isBadWord();
    this.questionService.refreshBad();
    this.submitted = !this.questionService.isBadWord();
  }
  showRecap() {
    this.clicked = !this.clicked;
  }
  goHome() {
    this.router.navigate(["/players"]);
  }
  badWords(pairForm: NgForm) {
    var Filter = require("bad-words"),
      filter = new Filter();
    filter.addWords("some", "bad", "word");
    console.log(
      filter.clean(pairForm.value.scenario1, pairForm.value.scenario2)
    );
  }

  refreshBad() {
    this.bad = false;
  }
  ngOnInit() {}
}
