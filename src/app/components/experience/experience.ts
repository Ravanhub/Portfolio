import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollReveal } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    ScrollReveal
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {}