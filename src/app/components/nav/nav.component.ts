import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  clickToggle = false;

  clicked() {
    this.clickToggle = !this.clickToggle;
    console.log(this.clickToggle);
  }
}
