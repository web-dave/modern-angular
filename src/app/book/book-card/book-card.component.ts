import { Component, input } from '@angular/core';
import { Book, BookNa } from '../models';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ws-book-card',
    templateUrl: './book-card.component.html',
    imports: [RouterLink]
})
export class BookCardComponent {
  readonly book = input<Book>(new BookNa());
}
