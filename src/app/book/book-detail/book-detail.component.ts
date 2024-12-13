import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  signal,
  input,
  output,
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NEVER, Observable } from "rxjs";
import { exhaustMap, switchMap, tap } from "rxjs/operators";
import { BookApiService } from "../book-api.service";
import { Book } from "../models";
import { AsyncPipe } from "@angular/common";
import { rxResource, takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "ws-book-detail",
  templateUrl: "book-detail.component.html",
  imports: [RouterLink],
})
export class BookDetailComponent {
  status: "error" | "loading" | "complete" | "idle" = "idle";
  private router = inject(Router);
  private bookService = inject(BookApiService);
  readonly isbn = input.required<string>();

  book = rxResource<Book, string>({
    request: this.isbn,
    loader: (param) => {
      this.status = "loading";
      return this.bookService.getByIsbn(param.request).pipe(
        tap({
          error: () => (this.status = "error"),
          next: () => (this.status = "complete"),
        })
      );
    },
  });

  public book$: Observable<Book> = NEVER;

  remove() {
    this.bookService
      .delete(this.isbn())
      .pipe(
        tap(() => this.router.navigateByUrl("/")),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
