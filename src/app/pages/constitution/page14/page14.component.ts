import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page14',
  imports: [],
  templateUrl: './page14.component.html',
  styleUrl: './page14.component.scss'
})
export class Page14Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
