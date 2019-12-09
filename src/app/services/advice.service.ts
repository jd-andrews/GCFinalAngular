import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdviceService {
  constructor(private http: HttpClient) {}

  getAdvice(): Observable<any> {
    return this.http.get(
      `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 218)}`
    );
  }
}
