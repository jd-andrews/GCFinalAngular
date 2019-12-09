import { Component, OnInit } from "@angular/core";
import { FacesService } from "src/app/services/faces.service";
import { AdviceService } from "src/app/services/advice.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  faces: any[];
  advices: any[] = [];

  constructor(
    private faceService: FacesService,
    private adviceService: AdviceService
  ) {}

  getOneAdvice(): void {
    // for (let i = 0; i < 3; i++) {
    this.adviceService.getAdvice().subscribe(advice => {
      this.advices.push(advice);
    });
    // }
    console.log(this.advices);
  }
  getAllFaces(): void {
    this.faceService.getUser().subscribe(data => (this.faces = data.results));
  }

  ngOnInit() {
    this.getAllFaces();
    this.getOneAdvice();
  }
}
