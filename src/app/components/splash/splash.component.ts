import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { FacesService } from "src/app/services/faces.service";

import { NgForm } from "@angular/forms";
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
  advice: string = "";
  clicked: boolean = false;

  constructor(private faceService: FacesService, private router: Router) {}

  getThreeAdvice(): void {
    for (let i = 0; i < 3; i++) {
      this.faceService.getAdvice().subscribe(advice => {
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

  choosePlayer(playerNameForm: NgForm, playerImage: string) {
    console.log(playerNameForm);
    this.faceService.setNewPlayer(playerNameForm.value.name, playerImage);
    console.log(playerNameForm.value.name, playerImage);
    this.router.navigate(["/game"]);
  }

  showPlayers() {
    this.show = true;
  }

  confirmPlayer(indexNum: number) {
    this.index = indexNum;
    this.clicked = !this.clicked;
  }

  deselectPlayer() {
    // this.confirmChoice = false;
    this.index = null;
    this.clicked = !this.clicked;
  }

  goHome() {
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    console.log("index", this.index);
    this.showPlayers();
    this.getAllFaces();
    this.getThreeAdvice();
  }
}
