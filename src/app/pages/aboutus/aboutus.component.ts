import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterModule, CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

    constructor(private router: Router){}

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
