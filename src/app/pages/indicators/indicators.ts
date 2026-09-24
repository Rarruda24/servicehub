import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-indicators',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './indicators.html',
  styleUrl: './indicators.css',
})
export class Indicators {}