import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page9',
  imports: [],
  templateUrl: './page9.component.html',
  styleUrl: './page9.component.scss'
})
export class Page9Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
