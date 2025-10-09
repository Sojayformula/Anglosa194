import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScrollSlideDirective } from '../../animation/animation';

@Component({
  selector: 'app-year-group',
  imports: [RouterModule, CommonModule, ScrollSlideDirective],
  templateUrl: './year-group.component.html',
  styleUrl: './year-group.component.scss'
})
export class YearGroupComponent implements OnInit{

    constructor( private router: Router){}


      ngOnInit() {
    this.updateScreenWidth();
  }

  back(){
    this.router.navigate(['aboutlayout'])
  }

      // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

// app.component.ts
activeBtn: string = '';

setActive(btn: string) {
  this.activeBtn = btn;
}

setWoman(btn: string) {
  this.activeBtn = btn;
}

setSchool(btn: string) {
  this.activeBtn = btn;
}


  isMdScreen = false;


  @HostListener('window:resize')
  updateScreenWidth() {
    this.isMdScreen = window.innerWidth >= 768; 
  }



}
