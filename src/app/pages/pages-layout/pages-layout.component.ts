import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

  isMenuOpen = false


   constructor(private router: Router){}

    admin(){
  this.router.navigate(['/login'])
  }

  // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

toggleMenu(){
  this.isMenuOpen = !this.isMenuOpen
}


}
