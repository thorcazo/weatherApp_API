import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-publicacion-details',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './publicacion-details.component.html',
  styleUrl: './publicacion-details.component.css',
})
export class PublicacionDetailsComponent {}
