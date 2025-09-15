import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CountComponent } from '../../counting/count/count.component';

@Component({
  selector: 'app-aboutus',
  imports: [RouterModule, CommonModule, CountComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent implements OnInit{

//     constructor(private router: Router){}

//   theSch(){
//     this.router.navigate(['/the-school'])
//   }

//     yearGroup(){
//     this.router.navigate(['/year-group'])
//   }    

//     volunteer(){
//     this.router.navigate(['/volunteers'])
//   } 

//      // navigate to footer //
// scrollToContact() {
//   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// }





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
