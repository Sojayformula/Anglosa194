import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-constitution-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './constitution-layout.component.html',
  styleUrl: './constitution-layout.component.scss'
})
export class ConstitutionLayoutComponent {   


  
   sideOpen = false;
  pages = [1,2,3,4,5,6,7,8]; // example pages; replace with your data

   isOpen = false;
   isHovering = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

   openSidebar() {
    this.isOpen = true;
  }

  closeSidebar() {
    this.isOpen = false;
  }


}
