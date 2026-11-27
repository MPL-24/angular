import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Car, Person } from '../../shared/person';

@Component({
  selector: 'ua-car-list',
  imports: [MatListModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.scss',
})
export class CarList {
  @Input({ required: true }) person!: Person;

  /** Eingegebenes Immatrikulationsjahr; undefined = kein Filter */
  registrationYear: number | undefined = undefined;

  /** Autos, die nach dem eingegebenen Jahr zugelassen wurden (Filtermethode der Klasse Person). */
  get filteredCars(): Car[] {
    return this.registrationYear === undefined
      ? this.person.cars
      : this.person.carsYoungerThan(this.registrationYear);
  }

  setRegistrationYear(value: string): void {
    const year = parseInt(value, 10);
    this.registrationYear = Number.isNaN(year) ? undefined : year;
  }
}
