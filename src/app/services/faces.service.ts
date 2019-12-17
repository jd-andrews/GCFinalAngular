import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "../interfaces/player";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class FacesService {
  private readonly BASE_URL = environment.pvsBaseUrl;
  //// Establishes instance of new player
  newPlayer: Player = {
    playerName: "",
    playerImage: "",
    playerScore: 0,
    playerCategory: ""
  };

  localPlayerNumber: number = 1;

  //// Sets new player with data for use in game and table
  setNewPlayer(playerName: string, playerImage: string) {
    this.newPlayer.playerName = playerName;
    this.newPlayer.playerImage = playerImage;
    console.log(this.newPlayer);
  }

  //// Gets new player with data for game/scores
  getNewPlayer() {
    return this.newPlayer;
  }
  constructor(private http: HttpClient) {}
  getUser(): Observable<any> {
    return this.http.get("https://randomuser.me/api/");
  }

  //// adds current Player to the database
  addPlayer(): Observable<any> {
    this.savePlayer();
    return this.http.post(`${this.BASE_URL}/add-player`, this.newPlayer);
  }

  //// Gets advice from advice api
  getAdvice(): Observable<any> {
    return this.http.get(
      `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 218)}`
    );
  }

  //// Saves Player to local storage
  savePlayer() {
    if (!window.localStorage.getItem(`player${this.localPlayerNumber}`)) {
      window.localStorage.setItem(
        `player${this.localPlayerNumber}`,
        this.newPlayer.playerName
      );
      this.localPlayerNumber++;
      console.log(this.localPlayerNumber, "local player number");
    } else {
      this.localPlayerNumber++;
    }
  }
}
