import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page4',
  imports: [],
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.scss'
})
export class Page4Component {

    constructor(private router: Router){}



  goBack(){
    this.router.navigate(["/constitution"])
  }


}
