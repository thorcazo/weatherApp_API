import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent {

  activateText = false;

  constructor() { }

  toggleText() {
    this.activateText = !this.activateText;
  }

}
