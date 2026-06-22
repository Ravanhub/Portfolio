import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollReveal } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ScrollReveal
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {}