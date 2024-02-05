import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [],
  templateUrl: './pie.component.html',
  styles: `#pie {
    background-color: rgb(218, 255, 235);
  }`
})
export class PieComponent {
  private autor = "Luis Miguel Fernández Costa"
  getAutor() {
    return this.autor
  }
}
