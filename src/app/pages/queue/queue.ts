import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './queue.html',
  styleUrl: './queue.css',
})
export class Queue {}