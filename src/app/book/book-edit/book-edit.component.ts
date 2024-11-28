import { Component, DestroyRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BookApiService } from "../book-api.service";
import { Book, BookNa } from "../models";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "ws-book-edit",
  templateUrl: "./book-edit.component.html",
  imports: [FormsModule],
})
export class BookEditComponent implements OnInit, OnDestroy {
  @Input() isbn: string = "";
  sink = new Subscription();
  book: Book = new BookNa();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookApiService,
    private dRef: DestroyRef
  ) {}

  ngOnInit() {
    this.bookService
      .getByIsbn(this.isbn)
      .pipe(takeUntilDestroyed(this.dRef))
      .subscribe((book) => (this.book = book));
  }

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

  save() {
    this.sink.add(
      this.bookService.update(this.book.isbn, this.book).subscribe()
    );
  }
}
