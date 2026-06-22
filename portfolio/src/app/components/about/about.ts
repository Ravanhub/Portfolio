import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollReveal} from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ScrollReveal
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  
  downloadResume() {
  const link = document.createElement('a');

  link.href = '/resume/SARAVANAN .pdf';

  link.download = 'SARAVANAN .pdf';

  link.click();
}
}