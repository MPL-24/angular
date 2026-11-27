import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-email-list',
  imports: [],
  templateUrl: './email-list.html',
  styleUrl: './email-list.scss',
})
export class EmailList {
  @Input() emailaddresses!: string[];
}
