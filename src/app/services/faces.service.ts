import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "../interfaces/player";

@Injectable({
  providedIn: "root"
})
export class FacesService {
  //// Establishes instance of new player
  newPlayer: Player = {
    playerName: "",
    playerImage: "",
    playerScore: 0
  };

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
    return this.http.post("http://localhost:3003/add-player", this.newPlayer);
  }

  //// Gets advice from advice api
  getAdvice(): Observable<any> {
    return this.http.get(
      `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 218)}`
    );
  }
}
