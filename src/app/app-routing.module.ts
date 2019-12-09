import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./components/splash/splash.component";
import { GameComponent } from "./components/game/game.component";
import { ScoresComponent } from "./components/scores/scores.component";

const routes: Routes = [
  { path: "home", component: SplashComponent },
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
