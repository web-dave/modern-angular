import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  AsyncValidatorFn,
} from "@angular/forms";
import {
  catchError,
  debounce,
  debounceTime,
  delay,
  map,
  Observable,
  of,
  switchMap,
  throttleTime,
  timeout,
  timer,
} from "rxjs";
import { BookApiService } from "../book-api.service";
import { inject } from "@angular/core";

export const isbn = (): AsyncValidatorFn => {
  const service = inject(BookApiService);

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    // return timer(500).pipe(
    return of(500).pipe(
      delay(500),
      switchMap(() =>
        service.getByIsbn(control.value).pipe(
          map((data) => ({
            isbn: `Book with ${data.isbn} exists `,
          })),
          catchError(() => of(null))
        )
      )
    );
  };
};

// (wartezeit$) => request$;
