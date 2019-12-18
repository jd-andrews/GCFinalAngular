import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { GameComponent } from "./components/game/game.component";
import { SplashComponent } from "./components/splash/splash.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddComponent } from "./components/add/add.component";
import { TutorialComponent } from "./components/tutorial/tutorial.component";

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    GameComponent,
    SplashComponent,
    LoadingComponent,
    AddComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
