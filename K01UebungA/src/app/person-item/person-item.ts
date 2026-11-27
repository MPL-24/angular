import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../shared/person';
import { CarList } from '../car-list/car-list';
import { EmailList } from '../email-list/email-list';

@Component({
  selector: 'ua-person-item',
  imports: [DatePipe, DecimalPipe, FlexLayoutModule, MatCardModule, MatIconModule, EmailList, CarList],
  templateUrl: './person-item.html',
  styleUrl: './person-item.scss',
})
export class PersonItem {
  @Input({ required: true }) person!: Person;

  /** Wer z. B. 18 Jahre alt ist, befindet sich im 19. Lebensjahr. */
  get yearOfLife(): number {
    return this.person.ageInYears + 1;
  }

  /** Personen mit mehr als 1,8 m gelten als groß. */
  get isTall(): boolean {
    return this.person.height > 1.8;
  }
}
