import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ua-email-list',
  imports: [MatListModule, MatIconModule],
  template: `
    <h3 class="list-title">E-Mail-Adressen</h3>
    @if (emailaddresses.length > 0) {
      <mat-list>
        @for (email of emailaddresses; track email) {
          <mat-list-item>
            <mat-icon matListItemIcon>email</mat-icon>
            <a matListItemTitle [href]="'mailto:' + email">{{ email }}</a>
          </mat-list-item>
        }
      </mat-list>
    } @else {
      <p class="empty">Keine E-Mail-Adressen festgelegt</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class EmailList {
  @Input() emailaddresses: string[] = [];
}
