import { Component, OnDestroy, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  NonNullableFormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { BookApiService } from "../book-api.service";
import { Book, BookNa } from "../models";
import { isbn } from "./isbn.validator";

@Component({
  selector: "ws-book-new",
  templateUrl: "./book-new.component.html",
  imports: [FormsModule, ReactiveFormsModule],
})
export class BookNewComponent implements OnDestroy {
  private router = inject(Router);
  form = inject(NonNullableFormBuilder).group({
    isbn: ["", [Validators.required, Validators.minLength(3)], [isbn()]],
    title: ["", Validators.required],
    author: ["", Validators.required],
    abstract: [""],
    cover: [""],
  });
  private bookService = inject(BookApiService);

  sink = new Subscription();
  saved = false;

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

  create() {
    const book: Book = { ...new BookNa(), ...this.form.value };
    this.sink.add(
      this.bookService
        .create(book)
        .pipe(tap(() => (this.saved = true)))
        .subscribe({
          complete: () => this.router.navigateByUrl("/"),
        })
    );
  }
}
