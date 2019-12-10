import { Component, OnInit } from "@angular/core";
import { FacesService } from "src/app/services/faces.service";
import { AdviceService } from "src/app/services/advice.service";
import { Player } from "src/app/interfaces/player";

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

  choosePlayer(playerName: string, playerImage: string) {
    this.faceService.setNewPlayer(playerName, playerImage);
  }
  ngOnInit() {
    this.getAllFaces();
    this.getOneAdvice();
  }
}
