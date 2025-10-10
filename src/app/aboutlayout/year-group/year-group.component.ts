import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ScrollSlideDirective } from '../../animation/animation';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-year-group',
  imports: [RouterModule, CommonModule, ScrollSlideDirective],
  templateUrl: './year-group.component.html',
  styleUrl: './year-group.component.scss'
})
export class YearGroupComponent implements OnInit{

   currentRoute = '';

    constructor( private router: Router){

       // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        // console.log(this.currentRoute);
      });
    }


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
