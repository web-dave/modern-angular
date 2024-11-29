import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, filter, Observable, of, retry } from "rxjs";
import { Book } from "./models";

@Injectable({ providedIn: "root" })
export class BookApiService {
  private http = inject(HttpClient);

  private endpoint = "http://localhost:4730/books";

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}`).pipe(
      retry({ delay: 3000, count: 5, resetOnSuccess: true }),
      catchError(() =>
        of([
          {
            abstract: "n/a",
            author: "n/a",
            cover: "n/a",
            isbn: "n/a",
            title: "n/a",
            subtitle: "n/a",
            numPages: 0,
            publisher: "n/a",
            price: 0,
          },
        ])
      ),
      filter((data) => data[0].title != "n/a")
    );
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/${isbn}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.endpoint}`, book);
  }

  update(isbn: string, patch: Partial<Book>): Observable<Book> {
    return this.http.patch<Book>(`${this.endpoint}/${isbn}`, patch);
  }

  delete(isbn: string): Observable<Book> {
    return this.http.delete<Book>(`${this.endpoint}/${isbn}`);
  }
}
