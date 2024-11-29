import { Component, inject } from "@angular/core";
import { BookApiService } from "../book-api.service";
import { RouterLink } from "@angular/router";
import { BookCardComponent } from "../book-card/book-card.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { BookFooterComponent } from "./footer.component";

@Component({
  selector: "ws-book-list",
  templateUrl: "book-list.component.html",
  imports: [RouterLink, BookCardComponent, BookFooterComponent],
})
export class BookListComponent {
  books = toSignal(inject(BookApiService).getAll(), { initialValue: [] });
  foo = "bar";
}
