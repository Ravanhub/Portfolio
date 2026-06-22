import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollReveal } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ScrollReveal
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  downloadResume() {
  const link = document.createElement('a');

  link.href = '/resume/saravanan_resume.pdf';

  link.download = 'saravanan_resume.pdf';

  link.click();
}
scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } 
}
}