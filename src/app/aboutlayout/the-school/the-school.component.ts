import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-the-school',
  imports: [RouterModule, CommonModule],
  templateUrl: './the-school.component.html',
  styleUrl: './the-school.component.scss'
})
export class TheSchoolComponent {

  constructor( private router: Router){}

  back(){
    this.router.navigate(['aboutlayout'])
  }

      // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

}
