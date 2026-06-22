import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ScrollReveal } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    ScrollReveal
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements AfterViewInit {

  @ViewChildren('progressFill')
  progressBars!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          const progress =
            entry.target as HTMLElement;

          const target =
            progress.getAttribute('data-width');

          if (entry.isIntersecting) {

            progress.style.width = target + '%';

          } else {

            progress.style.width = '0%';

          }

        });

      },

      {
        threshold: 0.2
      }
    );

    this.progressBars.forEach(bar => {
      observer.observe(bar.nativeElement);
    });
  }
}