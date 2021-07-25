import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Date</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let event of events">
          <td>{{ event.name }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.location?.address }}</td>
          <td>{{ event.location?.city }}</td>
          <td>{{ event.location?.country }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() events;
}
