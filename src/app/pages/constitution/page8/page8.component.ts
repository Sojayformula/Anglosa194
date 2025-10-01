import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page8',
  imports: [],
  templateUrl: './page8.component.html',
  styleUrl: './page8.component.scss'
})
export class Page8Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
