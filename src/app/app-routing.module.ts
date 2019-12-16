import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./components/splash/splash.component";
import { GameComponent } from "./components/game/game.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { TutorialComponent } from "./components/tutorial/tutorial.component";
import { AddComponent } from "./components/add/add.component";

const routes: Routes = [
  {
    path: "home",
    component: LoadingComponent,
    data: { animation: "home" }
  },
  {
    path: "players",
    component: SplashComponent,
    data: { animation: "players" }
  },
  { path: "add", component: AddComponent, data: { animation: "add" } },
  { path: "game", component: GameComponent, data: { animation: "game" } },
  { path: "scores", component: ScoresComponent, data: { animation: "scores" } },
  {
    path: "tutorial",
    component: TutorialComponent,
    data: { animation: "tutorial" }
  },

  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
