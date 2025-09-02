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

  constructor(private router: Router, private el: ElementRef) {}

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

     // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

}
