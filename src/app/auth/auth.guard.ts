import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { map } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return true; //inject(AuthService).isLoggedIn$.pipe(
  //   map((data) => (data ? true : router.createUrlTree(["about"])))
  // );
};
