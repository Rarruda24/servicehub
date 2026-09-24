import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {}