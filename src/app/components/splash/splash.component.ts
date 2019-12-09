import { Component, OnInit } from "@angular/core";
import { GameComponent } from "../game/game.component";
import { Router } from "@angular/router";
// import { QuestionsService } from "..services/questions.service";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  divNums: number[] = [1, 2, 3];
  show: boolean = false;
  confirmChoice: boolean = false;

  constructor() {}

  showPlayers() {
    this.show = true;
  }

  selectPlayer(indexNum) {
    console.log(indexNum);
    this.confirmChoice = true;
  }

  deselectPlayer() {
    this.confirmChoice = false;
  }

  ngOnInit() {
    this.showPlayers();
  }
}
