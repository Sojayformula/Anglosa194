import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page5',
  imports: [],
  templateUrl: './page5.component.html',
  styleUrl: './page5.component.scss'
})
export class Page5Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
