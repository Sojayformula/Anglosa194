import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-constitution',
  imports: [RouterModule, CommonModule],
  templateUrl: './constitution.component.html',
  styleUrl: './constitution.component.scss'
})
export class ConstitutionComponent {

     // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}


}



