import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-layout',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './table-layout.component.html',
  styleUrl: './table-layout.component.scss'
})
export class TableLayoutComponent {

     // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

}
