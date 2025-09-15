import { Component } from '@angular/core';
import { SupabaseService } from '../../../../service/supabase.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent {

      // contents: any[] = [];
      teachers: any[] = [];
      // APIData: any[] = [];
      teachAPIData: any[] = [];
  
    constructor(private supabaseService: SupabaseService) {}
  
         // navigate to footer //
      scrollToContact() {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
  
      isMenuOpen: boolean = false; 
  
        toggleMenu() {
          this.isMenuOpen = !this.isMenuOpen; 
        }
  
        

  
      async ngOnInit() {
    // try {
    //   this.APIData = await this.supabaseService.getContents();
    // } catch (err) {
    //   console.error('Error fetching contents:', err);
    // }
  
    try {
      this.teachAPIData = await this.supabaseService.getteachContents();
    } catch (err) {
      console.error('Error fetching teachers:', err);
    }
  }
  
    }