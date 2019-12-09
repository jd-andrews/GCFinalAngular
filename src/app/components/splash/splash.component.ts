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
  divNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  show: boolean = false;

  constructor() {}

  showPlayers() {
    this.show = true;
  }

  selectPlayer(indexNum) {
    console.log(indexNum);
  }

  ngOnInit() {}
}
