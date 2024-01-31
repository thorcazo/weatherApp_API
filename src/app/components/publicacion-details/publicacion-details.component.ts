import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publicacion-details',
  standalone: true,
  imports: [UserProfileComponent, RouterLink],
  templateUrl: './publicacion-details.component.html',
  styleUrl: './publicacion-details.component.css',
})
export class PublicacionDetailsComponent {}
