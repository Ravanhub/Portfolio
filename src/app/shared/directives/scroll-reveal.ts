import {
  Directive,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollReveal implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }

        });

      },
      {
        threshold: 0.15
      }
    );

    observer.observe(this.el.nativeElement);
  }
}