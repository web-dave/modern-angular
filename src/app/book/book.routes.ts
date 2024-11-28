import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { leaveGuard } from "./leave.guard";
import { authGuard } from "../auth/auth.guard";

const bookRoutes: Routes = [
  {
    path: "",
    component: BookComponent,
    children: [
      {
        path: "",
        component: BookListComponent,
        canActivate: [authGuard],
      },
      {
        path: "new",
        component: BookNewComponent,
        canDeactivate: [leaveGuard],
        canActivate: [authGuard],
      },
      {
        path: ":isbn",
        component: BookDetailComponent,
        canActivate: [authGuard],
      },
      {
        path: ":isbn/edit",
        component: BookEditComponent,
        canActivate: [authGuard],
      },
    ],
  },
];
export default bookRoutes;
