import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page10',
  imports: [],
  templateUrl: './page10.component.html',
  styleUrl: './page10.component.scss'
})
export class Page10Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
