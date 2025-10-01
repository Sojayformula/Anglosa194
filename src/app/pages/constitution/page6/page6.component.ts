import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page6',
  imports: [],
  templateUrl: './page6.component.html',
  styleUrl: './page6.component.scss'
})
export class Page6Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
