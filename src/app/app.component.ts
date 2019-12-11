import { Component } from "@angular/core";
import { slideInAnimations } from "src/route-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimations]
})
export class AppComponent {
  title = "WouldURather";
}
