import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, map, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedIn$$ = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn$$.pipe(tap((data) => console.log(data)));

  constructor() {
    interval(5000)
      .pipe(
        map((data) => data % 2 === 0),
        tap((data) => console.log(data))
      )
      .subscribe((data) => this.isLoggedIn$$.next(data));
  }
}
