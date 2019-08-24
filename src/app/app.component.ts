import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: String = 'Jitendra';

  constructor() {
    this.changeName('Nirnejak');
  }

  changeName(name: String): void {
    this.name = name
  }
}
