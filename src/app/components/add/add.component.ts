import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { QuestionService } from "src/app/services/question.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private questionService: QuestionService
  ) {}
  addScenario(pairForm: NgForm) {
    this.questionService
      .addQuestions(pairForm.value.scenario1, pairForm.value.scenario2)
      .subscribe();
    console.log(pairForm.value.scenario1, pairForm.value.scenario2);
  }
  ngOnInit() {}
}
