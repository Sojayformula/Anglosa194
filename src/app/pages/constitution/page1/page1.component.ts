import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page1',
  imports: [RouterModule, CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {


  constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }

}
