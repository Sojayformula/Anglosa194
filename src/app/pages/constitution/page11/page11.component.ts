import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page11',
  imports: [],
  templateUrl: './page11.component.html',
  styleUrl: './page11.component.scss'
})
export class Page11Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
