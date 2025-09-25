import { CommonModule } from '@angular/common';
import { Component, ElementRef, Directive, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
 import { CountComponent } from '../../counting/count/count.component';

@Component({
  selector: 'app-aboutlayout',
  imports: [RouterModule, CommonModule, CountComponent],
  templateUrl: './aboutlayout.component.html',
  styleUrl: './aboutlayout.component.scss' 
})
export class AboutlayoutComponent implements OnInit{

   isBaseRoute = false;
   isMenuOpen: boolean = false; 

  constructor(private router: Router, private el: ElementRef) {

     this.router.events.subscribe(() => {
      this.isBaseRoute = this.router.url === '/aboutlayout';
    });
  }

  ngOnInit() {
    
  }

  theSch(){
    this.router.navigate(['/the-school'])
  }

    yearGroup(){
    this.router.navigate(['/year-group'])
  }    

    volunteer(){
    this.router.navigate(['/volunteers'])
  } 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

    admin(){
  this.router.navigate(['/login'])
  }

     // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

}
