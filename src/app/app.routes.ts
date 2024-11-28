import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { authGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/books",
  },
  {
    path: "books",
    loadChildren: () => import("./book/book.routes"),
    canActivate: [authGuard],
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

export default appRoutes;
