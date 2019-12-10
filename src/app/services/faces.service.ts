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
  }
  constructor(private http: HttpClient) {}
  getUser(): Observable<any> {
    return this.http.get("https://randomuser.me/api/");
  }
  // getAllFaces(): Observable<any> {
  //   return this.http.get();
  // }
}
