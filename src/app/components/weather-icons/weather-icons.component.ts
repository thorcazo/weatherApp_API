import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-icons',
  standalone: true,
  imports: [],
  templateUrl: './weather-icons.component.html',
  styleUrl: './weather-icons.component.css'
})
export class WeatherIconsComponent {
  @Input() icon: string = '';  
}
