import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollSlideDirective } from '../../animation/animation';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [ScrollSlideDirective, RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent  {

  constructor(private router: Router){}

  theLogo(){
  this.router.navigate(['/the-school'])
  }

   // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}


  isMenuOpen: boolean = false; 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }




   @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideo.nativeElement;
    video.muted = true; // required for autoplay
    video.play().catch(err => {
      console.log('Autoplay prevented:', err);
    });
  }


}
