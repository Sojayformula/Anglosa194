import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

  // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}


}
