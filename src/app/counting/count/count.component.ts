// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-count',
//   imports: [],
//   templateUrl: './count.component.html',
//   styleUrl: './count.component.scss'
// })
// export class CountComponent {

// }

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true   // 👈 important for standalone apps
})
export class CountComponent implements OnInit {
  @Input() appCountUp!: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.animateCount(0, this.appCountUp, 2000);
  }

  animateCount(start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      this.el.nativeElement.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
}

