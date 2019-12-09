import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./components/splash/splash.component";
import { GameComponent } from "./components/game/game.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { from } from "rxjs";
const routes: Routes = [
  { path: "home", component: LoadingComponent },
  { path: "players", component: SplashComponent },
  { path: "game", component: GameComponent },
  { path: "scores", component: ScoresComponent },
  // this path has a placeholder for an index number to be added to the URL
  // e.g. /story/0, /story/3
  // { path: "story/:index", component: SavedStoryComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
