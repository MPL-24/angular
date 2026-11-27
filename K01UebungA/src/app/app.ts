import { Component } from '@angular/core';
import { PersonList } from './person-list/person-list';

@Component({
  selector: 'ua-root',
  imports: [PersonList],
  template: `<ua-person-list />`,
  styleUrl: './app.scss',
})
export class App {}
