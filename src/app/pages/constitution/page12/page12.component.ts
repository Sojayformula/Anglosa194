import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page12',
  imports: [],
  templateUrl: './page12.component.html',
  styleUrl: './page12.component.scss'
})
export class Page12Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
