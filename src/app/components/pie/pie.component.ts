import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {
  private autor = "Luis Miguel Fernández Costa"
  getAutor() {
    return this.autor
  }
}
