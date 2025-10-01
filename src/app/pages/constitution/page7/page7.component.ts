import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page7',
  imports: [],
  templateUrl: './page7.component.html',
  styleUrl: './page7.component.scss'
})
export class Page7Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
