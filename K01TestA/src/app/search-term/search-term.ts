import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ta-search-term',
  imports: [],
  templateUrl: './search-term.html',
  styleUrl: './search-term.scss',
})
export class SearchTerm {
  @Output('searchTerm') changeEvent: EventEmitter<string> = new EventEmitter<string>();

  emitSearchTermChange(searchTerm: string) {
    this.changeEvent.emit(searchTerm);
  }
}

