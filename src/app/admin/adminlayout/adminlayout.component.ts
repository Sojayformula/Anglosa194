import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  imports: [RouterModule, CommonModule],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.scss'
})
export class AdminlayoutComponent {

}
