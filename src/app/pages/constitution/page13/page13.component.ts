import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page13',
  imports: [],
  templateUrl: './page13.component.html',
  styleUrl: './page13.component.scss'
})
export class Page13Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
