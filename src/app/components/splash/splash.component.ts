import { Component, OnInit } from "@angular/core";
import { GameComponent } from "../game/game.component";
import { Router } from "@angular/router";
import { FacesService } from "src/app/services/faces.service";
import { AdviceService } from "src/app/services/advice.service";
import { Player } from "src/app/interfaces/player";
// import { QuestionsService } from "..services/questions.service";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  // divNums: number[] = [1, 2, 3];
  show: boolean = false;
  confirmChoice: boolean = false;
  index: number;
  faces: any[] = [];
  advices: any[] = [];

  constructor(
    private faceService: FacesService,
    private adviceService: AdviceService
  ) {}

  getOneAdvice(): void {
    for (let i = 0; i < 3; i++) {
      this.adviceService.getAdvice().subscribe(advice => {
        this.advices.push(advice);
      });
    }
    console.log(this.advices);
  }
  getAllFaces(): void {
    for (let i = 0; i < 3; i++) {
      this.faceService
        .getUser()
        .subscribe(data => this.faces.push(data.results));
    }
    console.log(this.faces);
  }

  choosePlayer(playerName: string, playerImage: string) {
    this.faceService.setNewPlayer(playerName, playerImage);
    console.log(playerName, playerImage);
  }
  showPlayers() {
    this.show = true;
  }

  confirmPlayer(indexNum: number) {
    this.index = indexNum;
  }

  deselectPlayer() {
    // this.confirmChoice = false;
    this.index = null;
  }

  ngOnInit() {
    console.log("index", this.index);
    this.showPlayers();
    this.getAllFaces();
    this.getOneAdvice();
  }
}
