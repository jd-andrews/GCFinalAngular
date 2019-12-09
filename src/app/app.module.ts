import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuestionsComponent } from "./components/questions/questions.component";
import { ScoresComponent } from './components/scores/scores.component';
import { GameComponent } from './components/game/game.component';
import { SplashComponent } from './components/splash/splash.component';

@NgModule({
  declarations: [AppComponent, QuestionsComponent, ScoresComponent, GameComponent, SplashComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
