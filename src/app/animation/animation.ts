import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollSlide]',
  standalone: true
})
export class ScrollSlideDirective implements OnInit, OnDestroy {
  @Input() from: 'left' | 'right' = 'left';
  @Input() threshold = 0.1;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    const startX = this.from === 'left' ? '-100px' : '100px';
    this.r.setStyle(this.el.nativeElement, 'transform', `translateX(${startX})`);
    this.r.setStyle(this.el.nativeElement, 'opacity', '0');
    this.r.setStyle(this.el.nativeElement, 'transition', 'all 0.8s ease-out');

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When scrolling INTO view → slide in
            this.r.setStyle(this.el.nativeElement, 'transform', 'translateX(0)');
            this.r.setStyle(this.el.nativeElement, 'opacity', '1');
          } else {
            // When leaving viewport → reset back offscreen
            const resetX = this.from === 'left' ? '-100px' : '100px';
            this.r.setStyle(this.el.nativeElement, 'transform', `translateX(${resetX})`);
            this.r.setStyle(this.el.nativeElement, 'opacity', '0');
          }
        });
      },
      { threshold: this.threshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}



