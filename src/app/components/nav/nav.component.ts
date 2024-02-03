import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OpenWeatherService } from '../../services/open-weather.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
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
