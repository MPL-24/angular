import { Component } from '@angular/core';
import { My } from './my/my';
import { SearchTerm } from './search-term/search-term';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'ta-root',
  imports: [My, SearchTerm, MatProgressBarModule, MatCardModule, FlexLayoutModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  onSearchTermChange(event: string){
    console.log(event);

  }
}
