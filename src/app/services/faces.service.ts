import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FacesService {
  getUser(): Observable<any> {
    return this.http.get("https://randomuser.me/api/");
  }
  constructor(private http: HttpClient) {}
  // getAllFaces(): Observable<any> {
  //   return this.http.get();
  // }
}
