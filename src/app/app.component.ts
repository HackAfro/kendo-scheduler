import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  events: Event[] = [];

  onNewEvent(event: Event) {
    this.events = this.events.concat(event);
  }
}
