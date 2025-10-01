import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page15',
  imports: [],
  templateUrl: './page15.component.html',
  styleUrl: './page15.component.scss'
})
export class Page15Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
